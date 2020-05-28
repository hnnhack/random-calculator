const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://niyas:qwerty123456@assignment-rqv6u.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log('DB connection successful!'));
