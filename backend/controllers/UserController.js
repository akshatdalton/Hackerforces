const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports = {
    createUser(req, res) {
        const { email, password, isAdmin } = req.body;
        const newUser = new User({ email, password, isAdmin });

        // Create salt & hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then((user) => {
                        jwt.sign(
                            { id: user.id },
                            process.env.jwtSecret,
                            { expiresIn: 3600 },
                            (err, token) => {
                                if (err) throw err;
                                return res.json({
                                    token,
                                    user: { id: user.id, email: user.email },
                                });
                            }
                        );
                    })
                    .catch((err) => res.status(400).json(err));
            });
        });
    },
};
