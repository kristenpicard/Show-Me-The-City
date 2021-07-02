const db = require("../models");
// const { User } = require('../models');

// Defining methods for the userController
module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findUserRecs: function (req, res) {
    db.User.find(req.params.id)
      .populate("recs").exec((err, recs) => {
        console.log("Populated User " + recs);
      })
  },
};

// router.post('/', async (req, res) => {
//   try {
//     const newUser = await User.create({
//       username: req.body.username,
//       password: req.body.password,
//     });

//     req.session.save(() => {
//       req.session.userId = newUser.id;
//       req.session.username = newUser.username;
//       req.session.loggedIn = true;

//       res.json(newUser);
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post('/login', async (req, res) => {
//   try {
//     const user = await User.findOne({
//       where: {
//         username: req.body.username,
//       },
//     });

//     if (!user) {
//       res.status(400).json({ message: 'No user account found!' });
//       return;
//     }

//     const validPassword = user.checkPassword(req.body.password);

//     if (!validPassword) {
//       res.status(400).json({ message: 'No user account found!' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.userId = user.id;
//       req.session.username = user.username;
//       req.session.loggedIn = true;

//       res.json({ user, message: 'You are now logged in!' });
//     });
//   } catch (err) {
//     res.status(400).json({ message: 'No user account found!' });
//   }
// });

// router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// module.exports = router;
