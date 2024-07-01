const express = require("express")
const app  = express ();
const mongoose = require ("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.DB_URI,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify:false,
    useUnifiedTopology: true,

})
.then(() => console.log("mongoDb is connected"))
.catch((err) => console.log(err));

app.use(express.json());
app.listen(3334,() =>console.log('server is running'))