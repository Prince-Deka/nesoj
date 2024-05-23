const Member = require('../models/nesoj-model');

const getMembers = async (req, res) => {
    try {
        const members = await Member.find();
        if (!members || members.length === 0) {
            res.status(404).json({ message: 'No members found' });
            return;
        }
        res.status(200).json(members);
    } catch (error) {
        console.error(`Error displaying members: ${error}`);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = getMembers;
