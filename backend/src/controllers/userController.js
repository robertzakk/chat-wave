import * as userService from '../services/userServices.js';

export const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.body.id);
        res.status(200).json(user);
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: `Internal Server Error: ${err}` });
    };
};