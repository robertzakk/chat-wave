import query from '../db.js';

export const getUser = async (id) => {
    const result = await query(
        'SELECT * FROM users WHERE id = $1',
        [id]
    );

    if (result.rows.length > 0) {
        return result.rows[0];
    } else {
        throw new Error('User not found');
    };
};