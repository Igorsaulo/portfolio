function sleep(ms) {
    {
        return new Promise(resolve => setTimeout(resolve,ms));
    };}
    asy
function tipywiter(elemento){
    var elemento = document.getElementById('Ig')
    var lista = elemento.innerHTML.split('');
    elemento.innerHTML='';
    lista.forEach((letra,i) => {
        setTimeout(function(){
            elemento.innerHTML +=letra;
        },250 * i)
        });
    }
    function acionar(){
        let texto=document.getElementById('Ig') 
        texto.addEventListener('load',acionar)
        tipywiter(texto);
        const sleep = milliseconds => {
            return new Promise(resolve => setTimeout(resolve, milliseconds));
              };
        sleep(250).then(() => {
            let texto2 =document.getElementById('j')
            texto2.style.color='rgb(85, 233, 85)'
        });
    }
    async function go(){
        var grafi = document.getElementById('circulo1')
        grafi.addEventListener('onload',go)
        var valor = Array(308).fill(4.4)
        for (v in valor){
            console.log(v)
            var grafi = document.getElementById('circulo1')
            grafi.style.strokeDashoffset=440-v;
            await sleep(10);
        }

        }
    async function num(){
        var contar = Array(71).fill(1)
        for (s in contar){
            var contar = document.getElementById('numbero')
            contar.innerHTML =s+'%';
            await sleep(20);}
    }
    async function num1(){
        var contar = Array(66).fill(1)
        for (s in contar){
            var contar = document.getElementById('numbero1')
            contar.innerHTML =s+'%';
            await sleep(20);}
    }
    async function num2(){
        var contar = Array(36).fill(1)
        for (s in contar){
            var contar = document.getElementById('numbero2')
            contar.innerHTML =s+'%';
            await sleep(20);}
    }

    async function num3(){
        var contar = Array(41).fill(1)
        for (s in contar){
            var contar = document.getElementById('numbero3')
            contar.innerHTML =s+'%';
            await sleep(20);}
    }
    async function c1(){
        var grafi = document.getElementById('circulo1')
        grafi.addEventListener('onload',go)
        var valor = Array(291).fill(4.4)
        for (v in valor){
            console.log(v)
            var grafi = document.getElementById('circulo2')
            grafi.style.strokeDashoffset=440-v;
            await sleep(10);
        }
    }
    async function c2(){
        var grafi = document.getElementById('circulo1')
        grafi.addEventListener('onload',go)
        var valor = Array(158).fill(4.4)
        for (v in valor){
            console.log(v)
            var grafi = document.getElementById('circulo3')
            grafi.style.strokeDashoffset=440-v;
            await sleep(10);
        }
    }
    async function c3(){
        var grafi = document.getElementById('circulo1')
        grafi.addEventListener('onload',go)
        var valor = Array(181).fill(4.4)
        for (v in valor){
            console.log(v)
            var grafi = document.getElementById('circulo4')
            grafi.style.strokeDashoffset=440-v;
            await sleep(10);
        }
    }


