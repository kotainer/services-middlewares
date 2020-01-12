import { AUTH_TOKEN_KEY } from '../consts/system';

const send401 = () => {
    throw {
        status: 401,
        message: 'Пользователь неавторизирован',
    }
}

export default (cacheService: any) => {
    return async (ctx: any, next: ()=> {}) => {
        const headerToken = ctx.headers.authorization;
        const user = await cacheService.get(`${AUTH_TOKEN_KEY}_${headerToken}`);

        if (!headerToken || !user) {
            send401();
        }

        ctx.user = user;

        next();
    }
};