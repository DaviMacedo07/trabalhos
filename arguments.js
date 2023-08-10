function somar () {
    console.log(arguments)
    let total = 0; 
    for (let i = 0 ; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 6, 7, 26))
console.log(somar(1, 2, 3, 65, 32))