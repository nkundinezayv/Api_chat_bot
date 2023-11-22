const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log("DB cONNECTED");
}).catch((Error)=>{
    console.log(Error);
})