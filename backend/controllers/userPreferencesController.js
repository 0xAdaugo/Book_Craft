const User = require('../models/User');

const updateUserPreferences = async (req, res) => {
  const { preferences } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.user.id, { preferences }, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user preferences' });
  }
};

module.exports = { updateUserPreferences };
