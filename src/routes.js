import { Router } from 'express';

import homeControler from './controllers/homeController.js';
import movieControler from './controllers/movieControler.js';

const router = Router();

router.use(homeControler);
router.use('/movies', movieControler);
router.all('*', (req, res) => {
    res.render('404');
})

export default router;