import { Router } from 'express';

import homeControler from './controllers/homeController.js';

const router = Router();

router.use(homeControler);

export default router;