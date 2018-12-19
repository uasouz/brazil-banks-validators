const { Bank } = require("./index")

const banco = new Bank(
    237,
    3726,
    null,
    "0127039",
    7
)

console.log(banco)

const bancoFalha = new Bank(
    237,
    3726,
    null,
    "0127037",
    7
)

console.log(bancoFalha)