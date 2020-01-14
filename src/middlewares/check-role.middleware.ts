export default (role: string) => {
    return async (ctx: any, next: () => {}) => {
        if (!ctx.user || ctx.user.role !== role) {
            ctx.status = 401;
            ctx.body = {
                message: 'Недостачно прав',
                status: 401,
            };
        }
    
        await next();
    };
}
