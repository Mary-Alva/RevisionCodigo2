// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

//const li = document.getElementsByName("lista-de-productos") Cambie por una funcion id
const lista = document.getElementById("lista-de-productos");
//const $i = document.querySelector('input'); // Sin utilidad al agregar el .forEach

// Agregue una funcion para mostrar la lista
const mostrarProductos = (productos) =>{
    lista.innerHTML = "";  //     

   /* cambio el ciclo for por .forEach */
//for (let i = 0; i < productos.length; i++) {
    productos.forEach(producto => {
/* Utilizar var es una mala practica lo cambio por const,
 cambio d por nuevoDiv  para mejorar legibilidad*/
 // var d = document.createElement("div") 
    const nuevaDiv = document.createElement("div");
  //d.classList.add("producto")
  /* Agrego los ; por buena practica */
    nuevaDiv.classList.add("producto");

  /* Cambio var por const y renombro ti  */
  //var ti = document.createElement("p")
    const titulo = document.createElement("p")
  //ti.classList.add("titulo") // se modifica por el cambio de nombre de variable y se agrega ;
    titulo.classList.add("titulo");
  //ti.textContent = productos[i].nombre // Quito el [i] por la modificacion del ciclo for
    titulo.textContent = producto.nombre;

  /* Cambio var por const  */
    const imagen = document.createElement("img");
  /* Corregi quitando el [i] */
    imagen.setAttribute('src', producto.img);

  /* Agrego datos modificados de la anterior var d y var ti */
    nuevaDiv.appendChild(titulo);
    nuevaDiv.appendChild(imagen);

    lista.appendChild(nuevaDiv);
  });
}
// Agrego ; para llamar la funcion y mostrar los productos
mostrarProductos(productos);

// Se añade ID a HTML, ya que no estaba declaradoAdd commentMore actions
const botonDeFiltro = document.getElementById("filtrar");

// se agrega en el boton de filtro Inpufiltro para hacer referncia al ID del botón
botonDeFiltro.onclick = () => {
  const inputFiltro = document.getElementById("filtro");

  //Se convierte el texto ingresado en el input a minisculas para que el resultado siga coincidiendo 
  const texto = inputFiltro.value.trim().toLowerCase();
  const productosFiltrados = filtrado(productos, texto);
  mostrarProductos(productosFiltrados);
};

// Se añaden LowerCase para que el tipo y color de zapatos se manejen en minusculas
const filtrado = (productos, texto) => {
  return productos.filter(item =>
    item.tipo.toLowerCase().includes(texto) || item.color.toLowerCase().includes(texto)
  );
};














/*const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {

  while (li.firstChild) {
    li.removeChild(li.firstChild);
  };

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  */