function calcularCotizacion() {
  const adultos = parseInt(document.getElementById("adultos").value) || 0;
  const niños = parseInt(document.getElementById("niños").value) || 0;
  const dias = parseInt(document.getElementById("dias").value) || 1;
  const personas = adultos + niños;

  let total = 0;

  if (document.getElementById("crucero").checked) total += personas * 200;
  if (document.getElementById("extras").checked) total += adultos * 150;
  if (document.getElementById("hotel").checked) total += personas * dias * 80;
  if (document.getElementById("estacionamiento").checked) total += dias * 50;
  if (document.getElementById("avion").checked) total += personas * 100;

  document.getElementById("resultado").innerText = `Total: $${total.toFixed(2)}`;

  // Enlaces dinámicos
  const mensaje = `Cotización de vacaciones:\nTotal: $${total.toFixed(2)}`;
  document.getElementById("enviarCorreo").href = `mailto:?subject=Cotización&body=${encodeURIComponent(mensaje)}`;
  document.getElementById("enviarWhatsApp").href = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
}
