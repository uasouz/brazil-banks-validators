const { Bank,validateBank,validateBankPromise } = require("../index")

try {
    let banco = new Bank(
        237,
        3726,
        null,
        "0127038",
        7
    )

    console.log(banco)

    banco = new Bank(
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

validateBankPromise(237,3726,null,"0127039",7,0,"",true).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

