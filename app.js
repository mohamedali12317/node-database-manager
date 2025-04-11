const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const mongoose = require('mongoose');
const allroutes = require('./routes/allroutes'); // استيراد الراوتر

const app = express();
const port = process.env.PORT|| 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// إعدادات LiveReload
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
app.use(connectLivereload());

liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});



// الاتصال بقاعدة البيانات
mongoose.connect('mongodb+srv://development12317:h6MszUCMjY8yswg8@cluster0.nbuhg.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('✅ الاتصال بقاعدة البيانات تم بنجاح');
    app.listen(port, () => {
      console.log(`🚀 الخادم يعمل على: http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('❌ خطأ في الاتصال بقاعدة البيانات:', err);
  });

// استخدام الراوتر
app.use(allroutes);