const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const app = express();
const port = 5000;
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));

const User = require ('./models/customerSchema');

var moment = require('moment');

var methodOverride = require('method-override') ;

app.use(methodOverride('_method'));



// إعدادات LiveReload
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

app.use(connectLivereload());

// إعادة تحميل المتصفح عند الاتصال
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

// إعدادات Express
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send('hi there');
// });

// app.listen(port, () => {
//   console.log(`🚀 الخادم يعمل على: http://localhost:${port}`);
// });

// get request

app.get('/', (req, res) => {
  // result = array of object 
  
  console.log('----------------------------------------');
  

  User.find()
  .then((result) => {
  // console.log(result);
  res.render('home.ejs' , {arr : result , moment : moment} );
  })
  .catch((err) => {
    console.log(err);
  })


});


app.get('/user/add.html', (req, res) => {
 res.render('user/add.ejs' , {} );
});


// app.get('/user/view.html', (req, res) => {
//  res.render('user/view.ejs' , {} );
// });

app.get('/edit/:id', (req, res) => {
 User.findById(req.params.id)
  .then((result) => {
    // console.log(result);  
    res.render('user/edit.ejs' , {obj : result , moment : moment} );
    })
    .catch((err) => {
      console.log(err);
    }) ;
});


app.get('/view/:id', (req, res) => {
  User.findById(req.params.id)
  .then((result) => {
    // console.log(result);  
    res.render('user/view.ejs' , {obj : result , moment : moment} );
    })
    .catch((err) => {
      console.log(err);
    }) ;
 });

 
// post request the old one

// app.post('/user/add.html', (req, res) => {
//   console.log(req.body);
 
//  const user = new User(req.body);
 
//   user.save().then(()=> {

//     res.redirect('/');
    
//   }).catch((err)=>{

//   }) ;
 
//  });

 // post request the new one

app.post('/user/add.html', (req, res) => {
  
 User.create(req.body).then(()=> {

    res.redirect('/');
    
  }).catch((err)=>{

  }) ;
 
 });

 app.post('/search', (req, res) => {

  console.log('************************************');

  const searchText = req.body.searchText.trim()
  
  User.find( {$or: [ { firstName : searchText} , {lastName : searchText} ] } ).then((result)=> {

     console.log(result);
 
     res.render('user/search.ejs' , {arr : result , moment : moment} );
     
   }).catch((err)=>{
 
   }) ;
  
  });


//  delete request 

app.delete('/edit/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    }) ;
  
 });

 //  put request 

app.put('/edit/:id', (req, res) => {
    // console.log(req.body);
    User.findByIdAndUpdate(req.params.id , req.body)
  .then(() => {
    res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    }) ;
  
 });

 
// mongoose

// paa = xwpVYAGRMvq0bYDZ
// user name = development12317
mongoose.connect('mongodb+srv://development12317:xwpVYAGRMvq0bYDZ@cluster0.nbuhg.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
 .then(() => { 
  console.log('✅ الاتصال بقاعدة البيانات تم بنجاح');
  app.listen(port, () => {
    console.log(`🚀 الخادم يعمل على: http://localhost:${port}`);
  });
 })
 .catch(() => {
  console.error('❌ خطأ في الاتصال بقاعدة البيانات:', err);
});

 