(function () {
    'use strict';

    /**
     * Компонент, который реализует таблицу
     * с возможностью удаления строк
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
    class ClearedTable {

        constructor(data) {
            this.el = document.createElement('table');
            this.el.classList.add('pure-table');
            this.data = data;
            this.render()
        }

        render() {
            let [thead, tbody] = this.createTableElements();
            this.el.appendChild(thead);
            this.el.appendChild(tbody);
            this.addRemoveLogic(tbody);
        }

        createTableElements() {
            let theadTr = `
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Salary</td>
                    <td>City</td>
                    <td></td>
                </tr>`;
            let thead = document.createElement('thead');
            thead.innerHTML = theadTr;

            let tbodyTr = this.data.map(item => `
                <tr data-tr-id="${item.id}">
                    <td>${item.name}</td>                    
                    <td>${item.age}</td>
                    <td>${item.salary}</td>
                    <td>${item.city}</td>
                    <td><a href="#delete">X</a></td>
                </tr>`).join('\n');
            let tbody = document.createElement('tbody');
            tbody.innerHTML = tbodyTr;
            return [thead, tbody];
        }

        addRemoveLogic(tbody) {
            tbody.addEventListener('click', event => {
                if (event.target.getAttribute('href') !== "#delete") {
                    return;
                }
                event.preventDefault();
                event.stopPropagation();
                let targetTr = event.target.closest('tr');
                let id = targetTr.getAttribute('data-tr-id');
                tbody.removeChild(targetTr);
                this.onRemoved(+id);

            })
        }

        /**
         * Метод который выщывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
        onRemoved(id) {
            console.log('id', id);
        }
    }

    window.ClearedTable = ClearedTable;
})();
