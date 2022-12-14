const btnIniciar = document.getElementById("IniciarSesion");
const login = document.querySelector(".login");

window.addEventListener("click", (e)=>{
    if (!login.getAttribute("hidden") && !login.contains(e.target)) {
        login.setAttribute("hidden", "true");
    } else if (login.getAttribute("hidden") && e.target === btnIniciar) {
        login.removeAttribute("hidden");
    }
});
