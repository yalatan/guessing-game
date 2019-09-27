class GuessingGame {
    constructor() {
        this.array = [];
        this.middlearray = 0;

    }

    setRange(min, max) {
        this.array = Array.apply(null, { length: max + 1 }).map(Number.call, Number);

    }

    guess() {
        this.middlearray = Math.floor(this.array.length / 2);
        return this.array[this.middlearray];
    }

    lower() {
        this.array = this.array.slice(0, this.middlearray + 1);
        return this.array;
    }

    greater() {
        this.array = this.array.slice(this.middlearray);
        return this.array;
    }
}

module.exports = GuessingGame;