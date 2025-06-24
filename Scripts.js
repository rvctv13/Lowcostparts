const productos = [
  { nombre: "Kit ángulo Uniball", modelo: "e36", precio: 400, imagen: "kit-uniball.jpg" },
  { nombre: "Disco de freno ventilado", modelo: "e46", precio: 150, imagen: "disco-freno.jpg" },
  { nombre: "Suspensiones regulables", modelo: "e90", precio: 600, imagen: "suspension.jpg" }
];

const catalogo = document.getElementById("catalogo");
const filtro = document.getElementById("filtro");

function mostrarProductos(filtrar = "todos") {
  catalogo.innerHTML = "";
  productos
    .filter(p => filtrar === "todos" || p.modelo === filtrar)
    .forEach(p => {
      const card = document.createElement("div");
      card.className = "producto";
      card.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>Modelo: ${p.modelo.toUpperCase()}</p>
        <p>Precio: ${p.precio} €</p>
      `;
      catalogo.appendChild(card);
    });
}

if (filtro) {
  filtro.addEventListener("change", e => mostrarProductos(e.target.value));
  mostrarProductos();
}
