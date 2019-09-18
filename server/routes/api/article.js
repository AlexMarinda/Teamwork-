import express from 'express';
import Article from '../../controllers/article';
import {verifyToken} from '../../helpers';
import {Validation} from '../../middleware/validation';



const router = express.Router();


router.post('/',verifyToken,Validation.createArticleValidator,Article.createArticle);
router.post('/:article_id/share',verifyToken,Article.shareArticle);
router.get('/',verifyToken,Article.getAllArticle);
router.get('/:article_id',verifyToken,Article.getSpecificArticle );
router.patch('/:article_id',verifyToken,Validation.editArticleValidator,Article.editArticle );







export default router;