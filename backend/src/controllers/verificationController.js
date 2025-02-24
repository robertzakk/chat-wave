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
        const isVerificationCodeCorrect = await verificationServices.verifyEmail(req.body.email, req.body.verificationCode);

        if (isVerificationCodeCorrect) {
            res.status(200).json( { isVerificationCodeCorrect: true } );
        } else {
            res.status(200).json( { isVerificationCodeCorrect: false } );
        };
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    };
};