var nome = document.querySelector('#nome')
var password = document.querySelector('#password')
var confirmePassword = document.querySelector('#confirme-password')
var next = document.querySelector('.cada')
const ver = () => {
    if (nome.value == 0 || password.value == 0 || confirmePassword.value == 0) {
        alert("Preencha todos os dados")
    }
    else if (password.value != confirmePassword.value){
        alert('Campos de senha diferente, verifique e tente novamente')
    }
    else if (password.value.length < 8 && confirmePassword.value.length < 8){
        alert('A senha precisa ter no mínimo 8 letras')
    }
    else {
        next.setAttribute('href','home.html')
    }
}

next.onclick = ver