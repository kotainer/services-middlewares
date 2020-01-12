import validationMiddleware from './middlewares/validation.middleware';
import tokenAuthMiddleware from './middlewares/token-auth.middleware';
import errorMiddleware from './middlewares/error.middleware';
import notFoundMiddleware from './middlewares/not-found.middleware';

export {
    validationMiddleware,
    tokenAuthMiddleware,
    errorMiddleware,
    notFoundMiddleware,
}