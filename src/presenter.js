import registrar_gasto from "./registradorGasto.js";

const gasto = document.querySelector("#monto");
const form = document.querySelector("#gasto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const gastoValue = Number.parseInt(gasto.value);
  div.innerHTML = "<p>" + registrar_gasto(gastoValue) + "</p>";
});
