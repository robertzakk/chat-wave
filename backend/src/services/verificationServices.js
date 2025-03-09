import query from '../db.js';
import { Recipient, EmailParams, MailerSend, Sender } from "mailersend";
import dotenv from 'dotenv';
import * as userServices from './userServices.js';
import { renderToPipeableStream } from 'react-dom/server'

dotenv.config();

export const sendVerificationEmail = async (user) => {
    if (!user.username || !user.password || !user.name) {
        throw new Error("Missing user information");
    };

    const verificationCode = Math.floor(Math.random() * 799999 + 200000);

    const code_expiration_date = new Date().getTime() + 1000 * 60 * 15; // Expires after 15 minutes.

    await query(
        `INSERT INTO email_verification
        (verification_code, expiration_date, user_email,
        user_password, user_name)
        VALUES ($1, $2, $3, $4, $5)`,
        [verificationCode, code_expiration_date, user.username,
        user.password, user.name]
    );

    const mailerSend = new MailerSend({
        apiKey: process.env.MAILERSEND_EMAIL_VERIFICATION_TOKEN,
    })
    
    const recipients = [new Recipient(user.username)];

    const sentFrom = new Sender(process.env.MAILERSEND_EMAIL_ADDRESS, 'ChatWave');

    const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(sentFrom)
        .setSubject("ChatWave Verification")
        .setHtml(`<strong>Your verification code is ${verificationCode}</strong>`)
        .setText("This is the text content");

    await mailerSend.email.send(emailParams).catch((err) => {
        console.log('Error sending mail: ', err);
    });
};

export const verifyEmail = async (email, verificationCode) => {
    const emailVerifications = await query(
        'SELECT * FROM email_verification WHERE user_email = $1',
        [email]
    );

    let mostRecentVerification = emailVerifications.rows[0];
    if (emailVerifications.rows.length > 0) {
        for (let i = 1; i < emailVerifications.rows.length; i++) {
            if (emailVerifications.rows[i].expiration_date > mostRecentVerification.expiration_date) {
                await query(
                    'DELETE FROM email_verification WHERE id = $1',
                    [mostRecentVerification.id]
                );
                
                mostRecentVerification = emailVerifications.rows[i];
            };
        };
    };

    if (mostRecentVerification.verification_code === parseInt(verificationCode)) {
        // Email verified successfully.
        
        const createdUser = await userServices.createUser({
            username: mostRecentVerification.user_email,
            password: mostRecentVerification.user_password,
            name: mostRecentVerification.user_name,
        });

        console.log('Created user in verificationServices.js: ', createdUser);

        return [true, createdUser];
    } else {
        return [false, null];
    };
 };