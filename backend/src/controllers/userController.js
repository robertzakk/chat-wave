import * as userService from '../services/userServices.js';

export const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.username);
        res.status(200).json(user);
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: err });
    };
};

export const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(200).json(newUser);
    } catch (err) {
        console.error('Error creating user: ', err);
        res.status(500).json({ error: err });
    };
};