# brazil-banks-validators

[![npm version](https://img.shields.io/npm/v/brazil-banks-validators.svg)](https://www.npmjs.com/package/brazil-banks-validators)

Package that has functions that validate bank branch and account of the 5 main banks of Brazil:
- Banco do Brasil
- Santander
- Caixa
- Bradesco
- Itaú

### Instalation
```
npm install --save brazil-banks-validators
```

### Usage
```
const validator = require("brazil-banks-validators")

// Success case when creating class 
try {
    const banco = new Bank(
        237,
        3726,
        null,
        "0127039",
        7
    )

    console.log(banco)
} catch(error) {
    console.log(error)
}

// Example case of error when creating class
try {
    const banco = new Bank(
        237,
        3726,
        null,
        "0127039",
        7
    )

    console.log(banco)
} catch(error) {
    console.log(error)
}

// Using validation function
validateBankPromise(237,3726,null,"0127039",7,0,"",true).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
```
