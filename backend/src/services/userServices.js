import query from '../db.js';
import bcrypt from 'bcrypt';

export const getUser = async (username) => {
    const result = await query(
        'SELECT * FROM users WHERE email = $1',
        [username]
    );

    if (result.rows.length > 0) {
        return result.rows[0];
    } else {
        throw new Error('User not found');
    };
};

export const createUser = async (userInfo) => {
    const saltRounds = 12;

    try {
        const hashedPassword = bcrypt.hashSync(userInfo.password, saltRounds);

        const result = await query(
            `INSERT INTO users (email, password, name, date_created)
            VALUES ($1, $2, $3, $4) RETURNING *`,
            [userInfo.username, hashedPassword, userInfo.name, new Date().getTime()]
        );
    
        if (result.rowCount > 0) {
            const returnedUser = result.rows[0];
            return returnedUser;
        } else {
            throw new Error('Failed to create user');
        }
    } catch (err) {
        throw new Error('Failed to hash password', err);
    };
};