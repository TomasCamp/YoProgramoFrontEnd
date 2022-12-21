function ocultarBotones() {
    let btnEdit = document.querySelectorAll(".bi-pencil");
    btnEdit.forEach(elem =>{
        elem.parentElement.setAttribute("hidden","true");
    })
    let btnTrash = document.querySelectorAll(".bi-trash");
    btnTrash.forEach(elem =>{
        elem.parentElement.setAttribute("hidden","true");
    })
}
function mostrarBotones() {
    let btnEdit = document.querySelectorAll(".bi-pencil");
    btnEdit.forEach(elem =>{
        elem.parentElement.removeAttribute("hidden");
    })
    let btnTrash = document.querySelectorAll(".bi-trash");
    btnTrash.forEach(elem =>{
        elem.parentElement.removeAttribute("hidden");
    })
}

ocultarBotones();

const btnIniciar = document.getElementById("IniciarSesion");
const login = document.querySelector(".login");
const btnSubmit = document.getElementById("sub");
const btnCerrar = document.getElementById("CerrarSesion");

window.addEventListener("click", (e)=>{
    if (!login.getAttribute("hidden") && !login.contains(e.target)) {
        login.setAttribute("hidden", "true");
    } else if (login.getAttribute("hidden") && e.target === btnIniciar) {
        login.removeAttribute("hidden");
    }
});

btnSubmit.addEventListener("click", (e)=>{
    e.cancelBubble
    login.setAttribute("hidden", "true");
    btnIniciar.setAttribute("hidden", "true");
    btnCerrar.removeAttribute("hidden");
    mostrarBotones();
})

btnCerrar.addEventListener("click", ()=>{
    btnCerrar.setAttribute("hidden", "true");
    btnIniciar.removeAttribute("hidden");
    ocultarBotones();
})