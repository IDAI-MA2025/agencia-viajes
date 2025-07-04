function calcular() {
  const adultos = parseInt(document.getElementById("adultos").value) || 0;
  const ninos = parseInt(document.getElementById("ninos").value) || 0;
  const totalPersonas = adultos + ninos;

  const crucero = parseFloat(document.querySelector("input[name='crucero']:checked").value);
  const avion = parseFloat(document.querySelector("input[name='avion']:checked").value);
  const hotel = parseFloat(document.querySelector("input[name='hotel']:checked").value);
  const diasHotel = parseInt(document.getElementById("diasHotel").value) || 0;
  const parking = parseFloat(document.querySelector("input[name='parking']:checked").value);

  let extrasTotal = 0;
  document.querySelectorAll(".extra:checked").forEach(extra => {
    extrasTotal += parseFloat(extra.value);
  });

  const costoCrucero = crucero * totalPersonas;
  const costoAvion = avion * totalPersonas;
  const costoExtras = extrasTotal * adultos;
  const costoHotel = hotel * diasHotel * totalPersonas;
  const costoParking = parking * diasHotel;

  const total = costoCrucero + costoAvion + costoExtras + costoHotel + costoParking;

  document.getElementById("resultado").textContent = `Total: $${total.toFixed(2)} USD`;

  const mensaje = `Cotización:\nTotal: $${total.toFixed(2)} USD`;
  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
  document.getElementById("whatsappLink").href = whatsappURL;
}
