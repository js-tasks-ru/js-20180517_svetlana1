/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
    if (typeof obj !== 'object' || !obj) {
        return obj
    }
    let result = {};
    for (let key in obj) {
        result[key] = clone(obj[key]);
    }
    return result;
}
