export default (ctx: any, next: ()=> {}) => {
    try {
        next();
    } catch (err) {
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            status: ctx.status,
            message: err.message,
        };
    }
};