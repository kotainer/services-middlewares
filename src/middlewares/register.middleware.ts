/**
 * Регистрация пользователя
 */
export default (usersServiceAPI: any, service: string) => {
    return async (ctx: any, next: () => {}) => {
        const user = await usersServiceAPI.register({
            ...ctx.request.body,
            service,
        });
            
        ctx.user = user;

        await next();
    }
}