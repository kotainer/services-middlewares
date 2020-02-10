import removeEmpty from '../helpers/remove-empty';

/**
 * Очистка пустых полей в теле запроса
 */
export default async (ctx: any, next: () => {}) => {
    ctx.request.body = removeEmpty(ctx.request.body);

    await next();
};