import * as verificationServices from '../services/verificationServices.js';

export const sendVerificationEmail = async (req, res) => {
    try {
        verificationServices.sendVerificationEmail(req.body);
        res.status(200).end();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    };
};

export const verifyEmail = async (req, res) => {
    try {
        console.log('Verifying email: ', req.body.email, req.body.verificationCode);
        await verificationServices.verifyEmail(req.body.email, req.body.verificationCode);
        res.status(200).end();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    };
};