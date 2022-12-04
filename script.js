function calcularTotal () {

    var n1 = document.getElementById('one').value 
    var n2 = document.getElementById('two').value 
    var n3 = document.getElementById('thr').value 
    var n4 = document.getElementById('fou').value 
    var n5 = document.getElementById('fiv').value 
    var n6 = document.getElementById('six').value 
    var nf = document.getElementById('ful').value 
    var ns = document.getElementById('seq').value 
    var np = document.getElementById('poc').value 
    var ng = document.getElementById('gen').value 
    if (n1==="") {n1=0} else {n1 = n1};
    if (n2==="") {n2=0} else {n2 = n2};
    if (n3==="") {n3=0} else {n3 = n3};
    if (n4==="") {n4=0} else {n4 = n4};
    if (n5==="") {n5=0} else {n5 = n5};
    if (n6==="") {n6=0} else {n6 = n6};
    if (nf==="") {nf=0} else {nf = nf};
    if (ns==="") {ns=0} else {ns = ns};
    if (np==="") {np=0} else {np = np};
    if (ng==="") {ng=0} else {ng = ng};
    var nt = parseInt(n1)+parseInt(n2)+parseInt(n3)+parseInt(n4)+parseInt(n5)+parseInt(n6)+parseInt(nf)+parseInt(ns)+parseInt(np)+parseInt(ng)
    document.getElementById('tot1').value = nt
}
function calcularTotal2 () {
    var n1 = document.getElementById('one2').value 
    var n2 = document.getElementById('two2').value 
    var n3 = document.getElementById('thr2').value 
    var n4 = document.getElementById('fou2').value 
    var n5 = document.getElementById('fiv2').value 
    var n6 = document.getElementById('six2').value 
    var nf = document.getElementById('ful2').value 
    var ns = document.getElementById('seq2').value 
    var np = document.getElementById('poc2').value 
    var ng = document.getElementById('gen2').value 
    if (n1==="") {n1=0} else {n1 = n1};
    if (n2==="") {n2=0} else {n2 = n2};
    if (n3==="") {n3=0} else {n3 = n3};
    if (n4==="") {n4=0} else {n4 = n4};
    if (n5==="") {n5=0} else {n5 = n5};
    if (n6==="") {n6=0} else {n6 = n6};
    if (nf==="") {nf=0} else {nf = nf};
    if (ns==="") {ns=0} else {ns = ns};
    if (np==="") {np=0} else {np = np};
    if (ng==="") {ng=0} else {ng = ng};
    var nt = parseInt(n1)+parseInt(n2)+parseInt(n3)+parseInt(n4)+parseInt(n5)+parseInt(n6)+parseInt(nf)+parseInt(ns)+parseInt(np)+parseInt(ng)
    document.getElementById('tot2').value = nt
}
function calcularTotal3 () {
    var n1 = document.getElementById('one3').value 
    var n2 = document.getElementById('two3').value 
    var n3 = document.getElementById('thr3').value 
    var n4 = document.getElementById('fou3').value 
    var n5 = document.getElementById('fiv3').value 
    var n6 = document.getElementById('six3').value 
    var nf = document.getElementById('ful3').value 
    var ns = document.getElementById('seq3').value 
    var np = document.getElementById('poc3').value 
    var ng = document.getElementById('gen3').value 
    if (n1==="") {n1=0} else {n1 = n1};
    if (n2==="") {n2=0} else {n2 = n2};
    if (n3==="") {n3=0} else {n3 = n3};
    if (n4==="") {n4=0} else {n4 = n4};
    if (n5==="") {n5=0} else {n5 = n5};
    if (n6==="") {n6=0} else {n6 = n6};
    if (nf==="") {nf=0} else {nf = nf};
    if (ns==="") {ns=0} else {ns = ns};
    if (np==="") {np=0} else {np = np};
    if (ng==="") {ng=0} else {ng = ng};
    var nt = parseInt(n1)+parseInt(n2)+parseInt(n3)+parseInt(n4)+parseInt(n5)+parseInt(n6)+parseInt(nf)+parseInt(ns)+parseInt(np)+parseInt(ng)
    document.getElementById('tot3').value = nt
}
function calcularTotal4 () {

    var n1 = document.getElementById('one4').value 
    var n2 = document.getElementById('two4').value 
    var n3 = document.getElementById('thr4').value 
    var n4 = document.getElementById('fou4').value 
    var n5 = document.getElementById('fiv4').value 
    var n6 = document.getElementById('six4').value 
    var nf = document.getElementById('ful4').value 
    var ns = document.getElementById('seq4').value 
    var np = document.getElementById('poc4').value 
    var ng = document.getElementById('gen4').value 

    if (n1==="") {n1=0} /*else {n1 = n1}*/;
    if (n2==="") {n2=0} /*else {n2 = n2}*/;
    if (n3==="") {n3=0} /*else {n3 = n3}*/;
    if (n4==="") {n4=0} /*else {n4 = n4}*/;
    if (n5==="") {n5=0} /*else {n5 = n5}*/;
    if (n6==="") {n6=0} /*else {n6 = n6}*/;
    if (nf==="") {nf=0} /*else {nf = nf}*/;
    if (ns==="") {ns=0} /*else {ns = ns}*/;
    if (np==="") {np=0} /*else {np = np}*/;
    if (ng==="") {ng=0} /*else {ng = ng}*/;

    var nt = parseInt(n1)+parseInt(n2)+parseInt(n3)+parseInt(n4)+parseInt(n5)+parseInt(n6)+parseInt(nf)+parseInt(ns)+parseInt(np)+parseInt(ng)

    document.getElementById('tot4').value = nt
}
function recomecar() {

    // Avatar dos jogadores
    let jog1 = document.getElementById("jog1")
    let jog2 = document.getElementById("jog2")
    let jog3 = document.getElementById("jog3")
    let jog4 = document.getElementById("jog4")

    let answer = confirm('Tem certeza que deseja recomeçar a partida?')

    // TRUE: apaga os nomes dos jogadores
    if (answer == true) { 
        jog1.value = ""
        jog2.value = ""
        jog3.value = ""
        jog4.value = ""
        zerarTimesPlayed()
        
        let inputs = document.getElementsByName("inp")
        
        for (let i = 0; i<=inputs.length; i++) {
            inputs[i].value = ""
        }   
    }
}
function zerarTimesPlayed() {
    document.getElementById('timesPlayed1').innerHTML = "0"
    document.getElementById('timesPlayed2').innerHTML = "0"
    document.getElementById('timesPlayed3').innerHTML = "0"
    document.getElementById('timesPlayed4').innerHTML = "0"
}
function jogar1() {
    let jogador1 = document.getElementById('conteiner1')
    let jogador2 = document.getElementById('conteiner2')
    let jogador3 = document.getElementById('conteiner3')
    let jogador4 = document.getElementById('conteiner4')
    let inputs1 = document.querySelectorAll('.input1')
    
    jogador1.style.background = "#FFD700"
    inputs1.style.background = "rgba(100, 100, 100, 1)"

    jogador2.style.background = "rgba(100, 100, 100, .7)"
    jogador3.style.background = "rgba(100, 100, 100, .7)"
    jogador4.style.background = "rgba(100, 100, 100, .7)"
}
function jogar2() {
    let jogador1 = document.getElementById('conteiner1')
    let jogador2 = document.getElementById('conteiner2')
    let jogador3 = document.getElementById('conteiner3')
    let jogador4 = document.getElementById('conteiner4')
    jogador1.style.background = ""
    jogador2.style.background = "#FFD700"
    jogador3.style.background = ""
    jogador4.style.background = ""
}
function jogar3() {
    let jogador1 = document.getElementById('conteiner1')
    let jogador2 = document.getElementById('conteiner2')
    let jogador3 = document.getElementById('conteiner3')
    let jogador4 = document.getElementById('conteiner4')
    jogador1.style.background = ""
    jogador2.style.background = ""
    jogador3.style.background = "#FFD700"
    jogador4.style.background = ""
}
function jogar4() {
    let jogador1 = document.getElementById('conteiner1')
    let jogador2 = document.getElementById('conteiner2')
    let jogador3 = document.getElementById('conteiner3')
    let jogador4 = document.getElementById('conteiner4')
    jogador1.style.background = ""
    jogador2.style.background = ""
    jogador3.style.background = ""
    jogador4.style.background = "#FFD700"
}
function timesPlayed() {
    let vazios = 0
    let inputs1 = document.querySelectorAll(".input1")
    for ( i=0; i<inputs1.length; i++) {
        if (inputs1[i].value == "") {
            vazios += 1
        }
    }
    document.getElementById("timesPlayed1").innerHTML = 10 - vazios
}
function timesPlayed2() {
    let vazios = 0
    let inputs2 = document.querySelectorAll(".input2")
    for ( i=0; i<inputs2.length; i++) {
        if (inputs2[i].value == "") {
            vazios += 1
        }
    }
    document.getElementById("timesPlayed2").innerHTML = 10 - vazios
}
function timesPlayed3() {
    let vazios = 0
    let inputs3 = document.querySelectorAll(".input3")
    for ( i=0; i<inputs3.length; i++) {
        if (inputs3[i].value == "") {
            vazios += 1
        }
    }
    document.getElementById("timesPlayed3").innerHTML = 10 - vazios
}
function timesPlayed4() {
    let vazios = 0
    let inputs4 = document.querySelectorAll(".input4")
    for ( i=0; i<inputs4.length; i++) {
        if (inputs4[i].value == "") {
            vazios += 1
        }
    }
    document.getElementById("timesPlayed4").innerHTML = 10 - vazios
}
function showTimesPlayed() {

    let jogadas1 = document.getElementById('timesPlayed1')
    let jogadas2 = document.getElementById('timesPlayed2')
    let jogadas3 = document.getElementById('timesPlayed3')
    let jogadas4 = document.getElementById('timesPlayed4')

    jogadas1.classList.toggle("mostrarJogadas")
    jogadas2.classList.toggle("mostrarJogadas")
    jogadas3.classList.toggle("mostrarJogadas")
    jogadas4.classList.toggle("mostrarJogadas")

}
function mostrarClassificacao() {

    
    let t1 = document.getElementById('tot1')
    let t2 = document.getElementById('tot2')
    let t3 = document.getElementById('tot3')
    let t4 = document.getElementById('tot4')

    let pai1 = t1.parentElement
    let pai2 = t2.parentElement
    let pai3 = t3.parentElement
    let pai4 = t4.parentElement
    
    // let filho1 = pai1.firstElementChild.firstElementChild.value
    // let filho2 = pai2.firstElementChild.firstElementChild.value
    // let filho3 = pai3.firstElementChild.firstElementChild.value
    // let filho4 = pai4.firstElementChild.firstElementChild.value
    
    let maiorValor = Math.max(t1.value, t2.value, t3.value, t4.value)

    alert(maiorValor.parentElement)
    // let vencedor = maiorValor
    // firstElementChild.firstElementChild

    alert(vencedor.length)
    
}





showTotais = () => {
    let it1 = document.getElementById('tot1')
    it1.classList.toggle('ocultar')
    let it2 = document.getElementById('tot2')
    it2.classList.toggle('ocultar')
    let it3 = document.getElementById('tot3')
    it3.classList.toggle('ocultar')
    let it4 = document.getElementById('tot4')
    it4.classList.toggle('ocultar')
}