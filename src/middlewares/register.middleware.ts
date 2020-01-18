/**
 * Регистрация пользователя
 */
export default (usersServiceAPI: any) => {
    return async (ctx: any, next: () => {}) => {
        const user = await usersServiceAPI.register(ctx.request.body);
            
        ctx.user = user;

        await next();
    }
}