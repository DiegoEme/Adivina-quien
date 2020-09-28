let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let datosCorreo = email.value;
  let datosPasswrod = password.value;

  let persona = {
    correo: datosCorreo,
    contraseña: datosPasswrod,
  };

  localStorage.setItem("persona", JSON.stringify(persona));
  setTimeout(function () {
    window.location = "adivina.html";
  }, 2000);
});

function obtener_local() {
  let persona = JSON.parse(localStorage.getItem("persona"));
  console.log(persona);
}
obtener_local();
