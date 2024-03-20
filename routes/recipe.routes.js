import { Router } from "express";
import { MongoClient } from "mongodb";


const router = Router();

//Define routes
router.post('/recipes', async (req,res) => {
    res.send ('Add recipe')
});

router.get('/recipes', async (req, res) => {
   res.send ('Get all recipes')
});

router.get('/recipes/:id', (req, res) => {
    res.send(`Get recipe with id: ${req.params.id}!`);
});

router.patch('/recipes/:id', (req, res) => {
    res.send('Update a single recipe!');
});

router.delete('/recipes/:id', (req, res) => {
    res.send('Delete a single recipe!');
});

//Export router
export default router;
