'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let str_parts = str.split(' ').join(',').split(',,').join(',').split(',');
    let max = -Infinity;
    let min = +Infinity;
    str_parts.forEach(value => {
        let number = parseFloat(value);
        if (max < number) {
            max = number
        }
        if (min > number) {
            min = number
        }
    });
    return {min: min, max: max}

}

