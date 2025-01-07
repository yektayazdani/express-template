const { User } = require('../models/User')

const getAllUsers = async (req, res) => {
    try {
            const users = await User.findAll();
            console.log(users)
            res.json(users);
        }
    catch (error) {
            console.log('error' + error)
            res.status(500).json({ message: 'Error fetching users', error });
    }
}

module.exports = { getAllUsers }