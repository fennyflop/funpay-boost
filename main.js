const priceRanges = [
    200, // 0-500
    200, // 500-1000
    200, // 1000-1500
    200, // 1500-2000
    300, // 2000-2500
    400, // 2500-3000
    500, // 3000-3500
    600, // 3500-4000
    700, // 4000-4500
    800, // 4500-5000
    900, // 5000-5500
    1000, // 5500-6000
    1500, // 6000-6500
    2000, // 6500-7000
    3000, // 7000-7500
    4000, // 7500-8000
    5000, // 8000-8500
    6000, // 8500-9000
    8000, // 9000-9500
    10000, // 9500-10000
];

const priceElement = document.querySelector('.price');

class BoostCalculator {
    constructor(prices) {
        this._price;
        this._prices = prices;
    }
    calculateBoostPrice(initial, desired) {
        let finalPrice = 0;

        if (initial > desired) {
            [initial, desired] = [desired, initial];
        }

        while (initial < desired) {
            const rangeIndex = Math.floor(initial/500); // range index
            
            const estimatedRange = (Math.floor(initial/500) + 1) * 500; 
            const endRange = estimatedRange > desired ? desired : estimatedRange; // up to mmr
        
            finalPrice += (endRange - initial) / 100 * this._prices[rangeIndex];
            initial = endRange;
        
        }        
        this._price = Math.abs(finalPrice);
        return Math.abs(finalPrice);
    }

    getPrice() {
        return this._price;
    }
}

const calculator = new BoostCalculator(priceRanges)

const to = document.querySelector('#to');
const from = document.querySelector('#from');
// console.log(from);
to.addEventListener('input', () => {
    calculator.calculateBoostPrice(from.value, to.value);
    priceElement.textContent = calculator.getPrice();
    console.log(calculator.getPrice());
})

from.addEventListener('input', () => {
    calculator.calculateBoostPrice(from.value, to.value);
    priceElement.textContent = calculator.getPrice();
    console.log(calculator.getPrice());
})
// 0 - 500
// 500-1000
// 1000-1500