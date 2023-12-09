//Constant Declaration
const input = require('sync-input');
const currencyArray = ['JPY', 'EUR', 'RUB', 'USD', 'GBP'];

//Functions
const currencyIssue = () => { return 'Unknown currency'; }
//Currency Declaration
let USD = {
    'EUR': 0.89,
    'JPY': 113.5,
    'RUB': 74.36,
    'GBP': 0.75,
    'USD': 1
}

let EUR = {
    'USD': 1.1236,
    'JPY': 127.12,
    'RUB': 83.28,
    'GBP': 0.84269652173913,
    'EUR': 1
}

let JPY = {
    'USD': 0.0088105,
    'JPY': 1,
    'RUB': 0.6618,
    'GBP': 0.0066,
    'EUR': 0.0079
}

let RUB = {
    'USD': 0.0134,
    'JPY': 1.5110,
    'GBP': 0.0100,
    'EUR': 0.0119,
    'RUB': 1
}

let GBP = {
    'USD': 1.3333,
    'EUR': 1.186667,
    'RUB': 99.146,
    'JPY': 151.33,
    'GBP': 1
}
console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);
//Main Loop
let choice = 0;

while (choice !== 2) {
    console.log('What do you want to do?');
    console.log('1-Convert currencies 2-Exit program');
    choice = Number(input());
    if (choice !== 1 && choice !==2)
    {
        console.log('Unknown input');
        continue;
    }
    if (choice === 1) {
        console.log(`What do you want to convert?`);
        let currencyFrom = input('From: ').toUpperCase();
        if (!currencyArray.includes(currencyFrom)) {
            console.log(currencyIssue());
            continue;
        }
        let currencyTo = input('To: ').toUpperCase();
        if (!currencyArray.includes(currencyTo)) {
            console.log(currencyIssue());
            continue;
        }
        let amount = Number(input('Amount: '));
        if (amount < 1) {
            console.log('The amount cannot be less than 1');
            continue;
        } else if (isNaN(amount)) {
            console.log('The amount has to be a number');
            continue
        }
        if (amount >= 1 && !isNaN(amount)) {
            switch (currencyFrom) {
                case 'JPY':
                    switch (currencyTo) {
                        case 'USD':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * JPY.USD).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'JPY':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * JPY.JPY).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'RUB':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * JPY.RUB).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'GBP':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * JPY.GBP).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'EUR':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * JPY.EUR).toFixed(4)} ${currencyTo}`);
                            break;
                    }
                    break;
                case 'EUR':
                    switch (currencyTo) {
                        case 'USD':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * EUR.USD).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'JPY':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * EUR.JPY).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'RUB':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * EUR.RUB).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'GBP':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * EUR.GBP).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'EUR':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * EUR.EUR).toFixed(4)} ${currencyTo}`);
                            break;
                    }
                    break;
                case 'RUB':
                    switch (currencyTo) {
                        case 'USD':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * RUB.USD).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'JPY':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * RUB.JPY).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'RUB':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * RUB.RUB).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'GBP':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * RUB.GBP).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'EUR':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * RUB.EUR).toFixed(4)} ${currencyTo}`);
                            break;
                    }
                    break;
                case 'GBP':
                    switch (currencyTo) {
                        case 'USD':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * GBP.USD).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'JPY':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * GBP.JPY).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'RUB':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * GBP.RUB).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'GBP':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * GBP.GBP).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'EUR':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * GBP.EUR).toFixed(4)} ${currencyTo}`);
                            break;
                    }
                    break;
                case 'USD':
                    switch (currencyTo) {
                        case 'USD':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * USD.USD).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'JPY':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * USD.JPY).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'RUB':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * USD.RUB).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'GBP':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * USD.GBP).toFixed(4)} ${currencyTo}`);
                            break;
                        case 'EUR':
                            console.log(`Result: ${amount} ${currencyFrom} equals ${(amount * USD.EUR).toFixed(4)} ${currencyTo}`);
                            break;
                    }
                    break;
            }
        }
    } else {console.log('Have a nice day!');
            return;}
}