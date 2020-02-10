/**
 * Авторизация пользователя
 *
 * Делает запись в кэш с данными полученного токена, для дальнейшей авторизации по нему.
 * Время жизни кэша 1 день
 * @param {String} login логин пользователя
 * @param {String} password пароль пользователя
 */
export default (usersServiceAPI: any) => {
    return async (ctx: any) => {
        const data = await usersServiceAPI.auth(ctx.request.body.login, ctx.request.body.password);

        ctx.body = {
            result: true,
            data,
        };
    }
}