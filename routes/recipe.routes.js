import { Router } from "express";
import { getRecipes, addRecipe,  upDateRecipe, getRecipe, deleteRecipe,  } from "../controllers/recipes.controller.js";


const router = Router();

//Define routes
router.post('/',addRecipe);

router.get('/',getRecipes );

router.get('/:id',getRecipe );

router.patch('/:id',upDateRecipe );

router.delete('/:id',deleteRecipe);

//Export router
export default router;
