import { AUTH_TOKEN_KEY } from '../consts/system';

export default (cacheService: any) => {
    return async (ctx: any, next: ()=> {}) => {
        const headerToken = ctx.headers.authorization;
        const user = cacheService.get(`${AUTH_TOKEN_KEY}_${headerToken}`);

        if (!headerToken || !user) {
            throw {
                status: 401,
                message: 'Пользователь неавторизирован',
            }
        }
    
        ctx.user = user;
    
        await next();
    }
};
