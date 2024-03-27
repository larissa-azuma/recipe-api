import { Router } from "express";
import multer from "multer";
import { getRecipes, addRecipe, upDateRecipe, getRecipe, deleteRecipe, } from "../controllers/recipes.controller.js";

//Create malter upload middlewares
const upload = multer({ dest: 'uploads/images' });

//Create recipes router

const router = Router();

//Define routes
router.post('/', upload.single('image'), addRecipe);

router.get('/', getRecipes);

router.get('/:id', getRecipe);

router.patch('/:id', upDateRecipe);

router.delete('/:id', deleteRecipe);

//Export router
export default router;
