let kertas = document.getElementById("kertas")
let gunting = document.getElementById("gunting")
let batu = document.getElementById("batu")

kertas.addEventListener("click", function (){ 
    document.getElementById("test").innerHTML = (win('kertas'))
});

batu.addEventListener("click",function () {
    document.getElementById("test").innerHTML = (win('batu'))
});

gunting.addEventListener("click",function () {
    document.getElementById("test").innerHTML = (win('gunting'))
});



function win(player) {
    let comp = countComp()
    let comp_display = document.getElementsByClassName('comp')
    let comp_kertas = document.getElementById("comp-kertas")
    let comp_batu = document.getElementById("comp-batu")
    let comp_gunting = document.getElementById("comp-gunting")
    console.log(comp_display);
    // console.log(player, 'ini player');
    // console.log(comp, 'ini computer');
    comp_gunting.style.display = "none"
    comp_batu.style.display = "none"
    comp_kertas.style.display = "none"
    if (comp === 'gunting') {
        comp_gunting.style.display = "block"
    } else if (comp === 'batu') {
        comp_batu.style.display = "block"
    } else if (comp === 'kertas') {
        comp_kertas.style.display = "block"
    }

    if (player === comp) {
        return `draw`
    }else if (player === 'kertas' && comp === 'batu') {
        return `menang`
    }else if (player === 'kertas' && comp === 'gunting') {
        return `kalah` 
    }else if (player === 'gunting' && comp === 'kertas') {
        return `menang`
    }else if (player === 'gunting' && comp === 'batu') {
        return `kalah` 
    }else if (player === 'batu' && comp === 'gunting') {
        return `menang`
    }else if (player === 'batu' && comp === 'kertas') {
        return `kalah`
    }
}

function countComp() {
    let count = Math.floor(Math.random()*3)
    let arr = ['gunting', 'batu','kertas']
    return arr[count]
}


