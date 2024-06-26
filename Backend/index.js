import connectDB from './src/config/database.js'
import { app } from './app.js'
import dotenv from 'dotenv';
dotenv.config();

const port=process.env.PORT || 8000;
connectDB()
.then( ()=> {
    app.listen( port, () => {
        console.log(`⚙️ Server is running at port : ${port}`);
    })
})
.catch( (err)=> {
    console.log("MONGO db connection failed !!! ", err);
})

app.get("/", (req, res) => {
    res.send("Hello, this is the response to your get request!");
});