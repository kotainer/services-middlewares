export default function removeEmpty(obj: any) {
    const result: any = {};

    for (const prop in obj) {
        if (obj[prop] !== null && obj[prop] !== undefined) {
            result[prop] = obj[prop];
        }
    }

    return result;
}
