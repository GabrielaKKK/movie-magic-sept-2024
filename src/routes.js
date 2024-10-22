import { Router } from 'express';

import homeControler from './controllers/homeController.js';
import movieControler from './controllers/movieControler.js';

const router = Router();

router.use(homeControler);
router.use('/movies', movieControler);

export default router;