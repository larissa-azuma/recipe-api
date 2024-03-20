import  express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import recipesRoutes from "./routes/recipe.routes.js";

//Load env variables
dotenv.config();

//Create express app
const app = express();

//Use routes
app.use(recipesRoutes);

//Make database connection
await mongoose.connect(process.env.MONGO_URI);


//Listen to incoming request
app.listen (6000,()=>{
    console.log('Express app is running');
});

