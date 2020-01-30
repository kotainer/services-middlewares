export default (scope: string) => {
    return async (ctx: any, next: () => {}) => {
        if (!ctx.user || !ctx.user.scope.includes(scope)) {
            throw {
                status: 401,
                message: 'Нет доступа',
            }
        }
    
        await next();
    };
}
