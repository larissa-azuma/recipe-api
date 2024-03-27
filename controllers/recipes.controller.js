import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res,next) => {
   try {
      // console.log(req.body);
    // add recipe to the database
     const createResult = await RecipeModel.create({
      ...req.body,
      image:req.file.filename
     });
     //return recipe
     res.status(201).json(createResult);
   } catch (error) {
    next(error);
   }
};
 

export const getRecipes = async (req, res,next) => {
   try {
     //Get all recipes from database
     const findResult = await RecipeModel.find();
     //Return response
     res.status(200).json(findResult);
 
} catch (error) {
    next (error);
   }
};

export const getRecipe = async (req, res,next) => {
   try {
     // Get single recipe ny id 
     const findByIdResult = await RecipeModel.findById(req.params.id);
     //Return 404 if no recipe is found 
     if (findByIdResult===null){
         res.status (404).json ({
            message : `Recipe with ID: ${req.params.id }not found `
        });
     }else{
    //Return  response
    res.status(200).json(findByIdResult);
}
   } catch (error) {
    next(error);
   }


}

export const upDateRecipe = (req, res) => {
    res.send(`Update recipe with id:${req.params.id}`);
}

export const deleteRecipe = (req, res) => {
    res.send(`Delete recipe with id:${req.params.id}`);
}