import validationMiddleware from './middlewares/validation.middleware';
import tokenAuthMiddleware from './middlewares/token-auth.middleware';
import errorMiddleware from './middlewares/error.middleware';
import notFoundMiddleware from './middlewares/not-found.middleware';
import checkScopeMiddleware from './middlewares/check-scope.middleware';
import checkRoleMiddleware from './middlewares/check-role.middleware';
import loginMiddleware from './middlewares/login.middleware';
import registerMiddleware from './middlewares/register.middleware';
import userInfoMiddleware from './middlewares/user-info.middleware';
import clearBodyEmptyFields from './middlewares/clear-body-empty-fields.middleware'

export {
    validationMiddleware,
    tokenAuthMiddleware,
    errorMiddleware,
    notFoundMiddleware,
    checkScopeMiddleware,
    checkRoleMiddleware,
    loginMiddleware,
    registerMiddleware,
    userInfoMiddleware,
    clearBodyEmptyFields
}