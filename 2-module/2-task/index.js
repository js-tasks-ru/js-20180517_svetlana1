/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find(obj, value) {
    let result = [];

    function findPath(object, root) {
        for (let key in object) {
            let path = root !== undefined ? root + '.' + key : key;
            let val = object[key];
            if (val === value) {
                result.push(path);
            }
            else {
                if (typeof val === 'object') {
                    findPath(val, path);
                }
            }
        }
    }

    findPath(obj);

    switch (result.length) {
        case 0:
            return null;
        case 1:
            return result[0];
        default:
            return result;
    }
}