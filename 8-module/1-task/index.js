'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');
    this.el.className = 'sorted-table';
    const KEYS = ['name', 'age', 'salary', 'city'];
    this.items = items;
    this.el.appendChild(renderThead());
    this.tbody = renderTbody(items);
    this.el.appendChild(this.tbody);

    function renderThead() {
        let thead = document.createElement('thead');
        thead.className = 'sorted-table__thead';
        let tr = document.createElement('tr');
        tr.className = 'sorted-table__thead-tr';
        for (let key of KEYS) {
            let td = document.createElement('td');
            td.className = 'sorted-table__thead-td sorted-table__thead-td_' + key;
            let text = key.charAt(0).toUpperCase() + key.slice(1);
            td.appendChild(document.createTextNode(text));
            tr.appendChild(td);
        }
        thead.appendChild(tr);
        return thead;
    }

    function renderTbody(items) {
        let tbody = document.createElement('tbody');
        tbody.className = 'sorted-table__tbody';
        for (let item of items) {
            let tr = document.createElement('tr');
            tr.className = 'sorted-table__tbody-tr';
            for (let key of KEYS) {
                let td = document.createElement('td');
                td.className = 'sorted-table__tbody-td';
                let text = item[key];
                td.appendChild(document.createTextNode(text));
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        console.log(tbody);
        return tbody;
    }

    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {
        let sortKey = KEYS[column];
        let sortTd = this.el.querySelector('.sorted-table__thead-td_sorted');
        if (sortTd) {
            sortTd.classList.remove('sorted-table__thead-td_sorted');
        }
        this.el.querySelector('.sorted-table__thead-td_' + sortKey).classList.add('sorted-table__thead-td_sorted');
        let sortedItems = this.items.sort((a, b) => (desc ? b[sortKey] > a[sortKey] : b[sortKey] < a[sortKey]));
        let tbody = renderTbody(sortedItems);
        this.el.replaceChild(tbody, this.tbody);
        this.tbody = tbody;
    };
}

