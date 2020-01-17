import { Validator, Schema } from 'jsonschema';

const validator = new Validator();

export default (schema: Schema) => {
    return async (ctx: any, next: () => {}) => {
        const instance = (ctx.method === 'POST' || ctx.method === 'PUT')
            ? ctx.request.body
            : ctx.request.query;
        const validationResult = validator.validate(instance, schema);

        if (!validationResult.valid) {
            throw {
                status: 400,
                message: validationResult.errors.map(error => {
                    return {
                        property: error.property.split('.').splice(1, 1).join('.'),
                        message: error.stack.replace('instance.', ''),
                        name: error.name,
                    }
                }),
            };
        }

        await next();
    }
};
