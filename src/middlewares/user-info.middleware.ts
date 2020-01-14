/**
 * Информация по пользователю
 */
export default (usersServiceAPI: any) => {
    return async (ctx: any) => {
        const user = await usersServiceAPI.getUserInfo(ctx.headers.authorization);
            
        ctx.body = {
            result: true,
            data: user,
        };
    }
}