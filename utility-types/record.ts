export namespace record {
    type Currency = 'USD' | 'EUR';

    type ExchangeRates = Record<Currency, number>;

    const rates: ExchangeRates = {
        USD: 65,
        EUR: 70
    }

    type AlterType = {
        [K in Currency]: number;
    }

    const alter: AlterType = rates;
}