import express from 'express';
import { addArticle } from '../Controllers/articleController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.post('/addArticle', authenticateToken, addArticle);

export default router;
