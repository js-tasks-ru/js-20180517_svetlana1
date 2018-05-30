let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let from = new Date(this.from.getTime());
    let to = new Date(this.to.getTime());

    return {
        next() {
            if (from <= to) {
                from.setDate(from.getDate() + 1);
                let currentDayNum = from.getDate();
                let currentDayNumTwoChars = (currentDayNum / 10 < 1 ? '0' : '') + currentDayNum;
                return {
                    done: false,
                    value: ~[0, 6].indexOf(from.getDay()) ? `[${currentDayNumTwoChars}]` : currentDayNumTwoChars
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}
;


