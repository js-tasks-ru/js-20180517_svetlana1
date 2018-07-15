(function () {

    class Tooltip {

        /**
         * Имя компонента
         * @property {string}
         */
        get name() {
            return 'tooltip';
        }

        /**
         * Обязательный отступ
         */
        get indent() {
            return 5;
        }

        constructor() {
            /**
             * Данное свойство содержит ссылку на
             * елемент содержащий подсказку
             * @type {HTMLDivElement}
             */
            this.el = document.createElement('div');
            this.el.style.position = 'absolute';

            this.el.classList.add(this.name);
            document.body.appendChild(this.el);
            this.eventsListener = []
        }

        /**
         * Метод подключает включает работу подсказок
         * на элементе
         *
         * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
         */
        attach(root) {
            let show = this._onMouseOver.bind(this);
            root.addEventListener('mouseover', show);
            this.eventsListener.push([root, 'mouseover', show]);

            let hide = this._onMouseOut.bind(this);
            root.addEventListener('mouseout', hide);
            this.eventsListener.push([root, 'mouseout', hide]);
        }

        _onMouseOver(event) {
            if (!event.target.hasAttribute(`data-${this.name}`)) {
                return;
            }
            let targetCoords = event.target.getBoundingClientRect();
            this.el.innerHTML = event.target.dataset[this.name];
            this.el.classList.toggle(`${this.name}_active`);
            // check space below
            if (targetCoords.bottom + this.indent + this.el.clientHeight <= document.documentElement.clientHeight) {
                // bottom of the text
                this.el.style.top = (targetCoords.bottom + this.indent) + "px";
            }
            else {
                // on top of the text
                this.el.style.top = (targetCoords.top - this.indent - this.el.clientHeight) + "px";
            }
        }

        _onMouseOut(event) {
            if (!event.target.hasAttribute(`data-${this.name}`)) return;
            this.el.innerHTML = "";
            this.el.style.removeProperty("top");
            this.el.classList.remove(`${this.name}_active`)
        }

        /**
         * Удаляет все обработчики событий
         */
        detach() {
            for (let [el, type, listener] of this.eventsListener) {
                el.removeEventListener(type, listener);
            }
        }
    }

    window.Tooltip = Tooltip;
})();