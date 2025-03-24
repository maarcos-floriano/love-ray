
function send() {
    const usuario = document.querySelector(".usuario").value;
    const senha = document.querySelector(".senha").value;
    const preencha = document.querySelector("#preencha");
    const sucesso = document.querySelector("#sucesso");
    const negado = document.querySelector("#negado"); 

    if (usuario.length < 1 || senha.length < 1) {
        preencha.style.display = 'inline';

        setTimeout(() => {
            preencha.style.display = 'none';
        }, 1000);

        return false;
    }

    if (usuario === "rayssa" && senha === "041021") {
        sucesso.style.display = 'inline';

        setTimeout(() => {
            location.href = "home/home.html";
        }, 500);
    } else {
        negado.style.display = 'inline';

        setTimeout(() => {
            location.href = "error/erro.html";
        }, 500);
    }
}

const date = new Date();

// if (date.getDay !== 23) {
//     location.href = "404/404.html";
// }