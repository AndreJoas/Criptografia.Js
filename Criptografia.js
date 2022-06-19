let descriptografia = (str) => {
    let table = {
        a:'v',  b:'r', c:'w', d:'u',
        e:'h', f:'n', g:'z', h:'e',
        i:'k', j:'o', k:'i', l:'y', 
        m:'q', n:'f', o:'j', p:'t',
        q:'m', r:'b', s:'x', t:'p',
        u:'d', v:'a', w:'c', x:'s',
        y:'l', z:'g', ' ': ' '
    }
    str = str.toLowerCase();
    let mensagem = ''
    for (let i = 0 ; i < str.length ; i++){
        mensagem += table[str[i]]
    }
    return mensagem
}
// let a = descriptografia("ana lindiner")
// console.log(a) // criptografar

// let b = descriptografia("vfv ykfukfhb")
// console.log(b) //descriptografar