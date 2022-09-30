import { express } from '../../types';
import { Request, Response } from 'express';
const podRouter = express.Router();
const podController = require('../controllers/podController');

podRouter.get('/cpu', podController.getCpuUsage, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.cpuUsage.data);
});

podRouter.get('/mem', podController.getMemUsage, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.memUsage.data);
});

podRouter.get('/instant', podController.getInstantMetrics, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.data);
})

module.exports = podRouter;