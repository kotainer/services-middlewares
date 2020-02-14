import { Schema } from 'jsonschema';
import * as Ajv from 'ajv';
import {ru} from '@kotainer/ajv-ru-en';

const ajv = Ajv({ allErrors: true });

export default (schema: Schema) => {
    const validator = ajv.compile(schema);

    return async (ctx: any, next: () => {}) => {
        const instance = (ctx.method === 'POST' || ctx.method === 'PUT')
            ? ctx.request.body
            : ctx.request.query;
        const validate = await validator(instance);

        if (!validate) {
            ru(validator.errors);

            throw {
                status: 400,
                message: ajv.errorsText(validator.errors, { separator: '\n' }).replace('data', '').trim() || 'Ошибка валидации данных',
                errors: validator.errors,
            };
        }

        await next();
    }
};
