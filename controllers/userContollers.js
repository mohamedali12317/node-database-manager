const User = require('../models/customerSchema');
const moment = require('moment');

// دالة لعرض الصفحة الرئيسية
const getHomePage = (req, res) => {
  User.find()
    .then((result) => {
      res.render('home.ejs', { arr: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

// دالة لعرض صفحة إضافة مستخدم
const getAddUserPage = (req, res) => {
  res.render('user/add.ejs', {});
};

// دالة لعرض صفحة تعديل مستخدم
const getEditUserPage = (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.render('user/edit.ejs', { obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

// دالة لعرض صفحة عرض مستخدم
const getViewUserPage = (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.render('user/view.ejs', { obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

// دالة لإضافة مستخدم
const addUser = (req, res) => {
  User.create(req.body)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};

// دالة للبحث عن مستخدم
const searchUser = (req, res) => {
  const searchText = req.body.searchText.trim();
  User.find({ $or: [{ firstName: searchText }, { lastName: searchText }] })
    .then((result) => {
      res.render('user/search.ejs', { arr: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

// دالة لحذف مستخدم
const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};

// دالة لتعديل مستخدم
const updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};

// تصدير الدوال
module.exports = {
  getHomePage,
  getAddUserPage,
  getEditUserPage,
  getViewUserPage,
  addUser,
  searchUser,
  deleteUser,
  updateUser,
};