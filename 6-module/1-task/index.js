'use strict';

/**
 * Функция возвращает строкой, сколько времени осталоьс до события
 * @param {Date} when - дата события
 * @return {string} - строка с указанием времени до начала события
 */
function getBeforeTime(when) {
    let current = Date.now(); // обязательно получать текущую дату через эту функцию. Иначе тесты работать не будут
    let delta = when - current;
    if (delta <= 0) {
        return 'событие завершилось';
    }
    let startDate = new Date(0);
    let deltaDate = new Date(delta);
    let yearsDelta = deltaDate.getFullYear() - startDate.getFullYear();
    let monthDelta = deltaDate.getMonth() - startDate.getMonth();
    let daysDelta = deltaDate.getDate() - startDate.getDate();
    if (new Date(deltaDate.getFullYear(), deltaDate.getMonth() + 1, 0).getDate() < new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate()) {
        daysDelta++;
    }
    let hoursDelta = deltaDate.getHours() - startDate.getHours();
    let minutesDelta = deltaDate.getMinutes() - startDate.getMinutes();
    let secondsDelta = deltaDate.getSeconds() - startDate.getSeconds();
    let result = [];
    if (yearsDelta) {
        result.push(yearsDelta + ' г.')
    }
    if (monthDelta) {
        result.push(monthDelta + ' мес.')
    }
    if (daysDelta) {
        result.push(daysDelta + ' д.')
    }
    if (hoursDelta) {
        result.push(hoursDelta + ' ч.')
    }
    if (minutesDelta) {
        result.push(minutesDelta + ' мин.')
    }
    if (secondsDelta) {
        result.push(secondsDelta + ' сек.')
    }
    return result.join(', ');


}