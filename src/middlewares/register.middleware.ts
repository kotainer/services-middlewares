/**
 * Регистрация пользователя
 */
export default (usersServiceAPI: any) => {
    return async (ctx: any) => {
        const user = await usersServiceAPI.register(ctx.request.body);
            
        ctx.user = user;
    }
}