export default (role: string) => {
    return async (ctx: any, next: () => {}) => {
        if (!ctx.user || ctx.user.role !== role) {
            throw {
                status: 401,
                message: 'Недостачно прав для выполнения операции',
            }
        }
    
        await next();
    };
}
