const express = require('express');
const router = express.Router();
const User = require('../models/customerSchema');
const moment = require('moment');

// إعدادات الراوتر

router.get('/', (req, res) => {
  User.find()
    .then((result) => {
      res.render('home.ejs', { arr: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/user/add.html', (req, res) => {
  res.render('user/add.ejs', {});
});

router.get('/edit/:id', (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.render('user/edit.ejs', { obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/view/:id', (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.render('user/view.ejs', { obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/user/add.html', (req, res) => {
  User.create(req.body)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/search', (req, res) => {
  const searchText = req.body.searchText.trim();
  User.find({ $or: [{ firstName: searchText }, { lastName: searchText }] })
    .then((result) => {
      res.render('user/search.ejs', { arr: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete('/edit/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put('/edit/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;