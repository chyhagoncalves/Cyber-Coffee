var nome = document.querySelector('.nome')
var senha = document.querySelector('.senha')
var connect = document.querySelector('.connect')
var show = document.querySelector('.show')
var check = document.querySelector('#check')

setInterval(function () {

if(nome.value != 0 && senha.value.length > 5){
    connect.style.background = '#e8986f'
}
else {
    connect.style.background = '#695952'
}
});

const showUp = () => {
    if(check.checked == true){
        senha.setAttribute('type', 'password')
        show.innerHTML = 'Mostrar'
    }
    else {
        senha.setAttribute('type', 'text')
        show.innerHTML = 'Ocultar'
    }
}

show.onclick = showUp