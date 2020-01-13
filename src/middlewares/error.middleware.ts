export default async (ctx: any, next: ()=> {}) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            status: ctx.status,
            message: err.message,
        };
    }
};