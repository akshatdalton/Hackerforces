const bcrypt = require("bcryptjs");
const User = require("../models/User");

module.exports = {
    createUser(req, res) {
        const { email, password } = req.body;
        const newUser = new User({ email, password });

        // Create salt & hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then((user) => {
                        return res.json({ email: user.email, id: user._id });
                    })
                    .catch((err) => res.status(400).json(err));
            });
        });
    },
};
