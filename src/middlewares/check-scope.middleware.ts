export default (scope: string) => {
    return async (ctx: any, next: () => {}) => {
        if (!ctx.user || !ctx.user.scope.includes(scope)) {
            ctx.status = 401;
            ctx.body = {
                message: 'Нет доступа',
                status: 401,
            };
        }
    
        await next();
    };
}
