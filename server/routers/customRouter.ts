import { express } from '../../types';
import { Request, Response } from 'express';
import customController from '../controllers/customController';
const customRouter = express.Router();

customRouter.post(
  '/test',
  customController.testCustomRoute,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.valid);
  }
);

customRouter.post(
  '/queries',
  customController.testCustomRoute,
  customController.addCustomRoute,
  (req: Request, res: Response) => {
    const status = res.locals.addedRoute ? 200 : 400;
    return res.status(status).json(res.locals.addedRoute);
  }
);

customRouter.get(
  '/queries',
  customController.getCustomRoute,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.data);
  }
);

customRouter.get(
  '/list',
  customController.listCustomRoutes,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.data);
  }
);

customRouter.delete(
  '/queries',
  customController.deleteCustomRoute,
  (req: Request, res: Response) => {
    const status = res.locals.deletedRoute ? 200 : 400;
    return res.status(status).json(res.locals.route);
  }
);

customRouter.post(
  '/active',
  customController.changeRouteActive,
  (req: Request, res: Response) => {
    return res
      .status(200)
      .send(`Query ${req.body.id} set to ${req.body.active}`);
  }
);

export default customRouter;
