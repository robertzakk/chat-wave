import * as verificationServices from '../services/verificationServices.js';

export const sendVerificationEmail = async (req, res) => {
    try {
        verificationServices.sendVerificationEmail(req.body.email);
    } catch (err) {
        console.error('Error sending verification email:', err);
        res.status(500).json({ error: err });
    };
};