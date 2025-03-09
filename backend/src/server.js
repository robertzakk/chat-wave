import express from 'express';
import userRoutes from './routes/userRoutes.js';
import verificationRoutes from './routes/verificationRoutes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

import query from './db.js';
import session from 'express-session';
import connectPgSimple from 'connect-pg-simple'
import passport from 'passport';
import { Strategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { poolDB } from './db.js'

const app = express();
const port = 8080;

passport.use(new Strategy((username, password, done) => {
    try {
        const users = query(
            `SELECT * FROM users WHERE email = $1`,
            [username]
        );

        if (users.rowCount > 0) {
            const user = users.rows[0];

            bcrypt.compare(password, user.password).then((isCorrectPassword) => {
                if (isCorrectPassword) {
                    return done(null, user);
                } else {
                    return done('Password incorrect', false);
                };
            });
        } else {
            return done('User not found', false);
        };
    } catch (err) {
        return done(err, false);
    };
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userID, done) => {
    try {
        const users = query(
            `SELECT * FROM users WHERE id = $1`,
            [userID],
        );

        if (users.rowCount > 0) {
            done(null, users.rows[0]);
        } else {
            done(`User with id ${userID} not found.`, false);
        };
    } catch (err) {
        done(err, false);  
    };
});

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'admintest',
    store: new (connectPgSimple(session))({
        pool: poolDB,
    }),
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30 Days valid cookie
    }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRoutes);
app.use('/verification', verificationRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});