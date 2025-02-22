import { Recipient, EmailParams, MailerSend } from "mailersend";

export const sendVerificationEmail = async (userEmail) => {
    const mailerSend = new MailerSend({
        apiKey: process.env.MAILERSEND_EMAIL_VERIFICATION_TOKEN,
    })
    
    const recipients = [new Recipient(userEmail)];

    const verificationCode = Math.random() * 7999 + 2000;

    const emailParams = new EmailParams()
        .setFrom("trial-z3m5jgr3v8zgdpyo.mlsender.net")
        .setFromName("ChatWave")
        .setRecipients(recipients)
        .setSubject("ChatWave Verification")
        .setHtml("Here's your ChatWave verification code: " + verificationCode);

    mailerSend.send(emailParams);

    await query(
        `INSERT INTO email_verification (email, verification_code)
        VALUES ($1, $2)`,
        [userEmail, verificationCode]
    );
};