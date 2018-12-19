const { Bank,validateBank,validateBankPromise } = require("./index")

const banco = new Bank(
    237,
    3726,
    null,
    "0127039",
    7
)

console.log(banco)

console.log(validateBank(237,3726,null,"0127039",7))

validateBankPromise(237,3726,null,"0127039",7,0,"",true).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

