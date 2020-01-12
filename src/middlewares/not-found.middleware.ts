export default (ctx: any, next: () => {}) => {
    if (ctx.status === 404) {
        ctx.status = 404;
        ctx.body = {
            message: 'Неизвестный метод',
            status: 404,
        };
    }

    next();
};
