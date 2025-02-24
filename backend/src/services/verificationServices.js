import query from '../db.js';
import { Recipient, EmailParams, MailerSend, Sender } from "mailersend";
import dotenv from 'dotenv';

dotenv.config();

export const sendVerificationEmail = async (user) => {
    if (!user.username || !user.password || !user.name) {
        throw new Error("Missing user information");
    };

    const verificationCode = Math.floor(Math.random() * 799999 + 200000);

    const code_expiration_date = new Date().getTime() + 1000 * 60 * 15; // Expires after 15 minutes.
    const user_date_created = new Date().getTime();

    await query(
        `INSERT INTO email_verification
        (verification_code, expiration_date, user_email,
        user_password, user_name, user_date_created)
        VALUES ($1, $2, $3, $4, $5, $6)`,
        [verificationCode, code_expiration_date, user.username,
        user.password, user.name, user_date_created]
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
    const response = await query(
        'SELECT * FROM email_verification WHERE user_email = $1',
        [email]
    );

    let mostRecentVerification = response.rows[0];
    if (response.rows.length > 0) {
        for (let i = 1; i < response.rows.length; i++) {
            if (response.rows[i].expiration_date > mostRecentVerification.expiration_date) {
                const response = await query(
                    'DELETE FROM email_verification WHERE id = $1',
                    [mostRecentVerification.id]
                );
                
                mostRecentVerification = response.rows[i];
            };
        };
    };

    if (mostRecentVerification.verification_code === parseInt(verificationCode)) {
        // Email verified successfully.
        await query(
            `INSERT INTO users (email, password, name, date_created)
            VALUES ($1, $2, $3, $4)`,
            [mostRecentVerification.user_email,
            mostRecentVerification.user_password,
            mostRecentVerification.user_name,
            mostRecentVerification.user_date_created]
        );

        return true;
    } else {
        return false;
    };
 };