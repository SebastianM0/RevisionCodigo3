// JS
//Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const listaDeProductos = document.getElementById("lista-de-productos")
const filtro = document.getElementById("filtro"); //Cambiamos a getElementById y ponemos el id del boton filtro y ponemos comillas dolbes

//metemos este for dentro de una función para llamarla más adelante y sea mas facil filtrar 

function listaProductos(productos){

  listaDeProductos.innerHTML=""; //esto borra la lista de todos los productos y solo nos mostrara el filtrado, porque si no lo pongo solo se repite el del filtro jiji
  for (let producto of productos) { //por cada producto del array productos 
    var divDelProducto = document.createElement("div") //Cambio el nombre de la variable porque solo una letra me pierdo 
    divDelProducto.classList.add("producto") //se agrega "producto"
  
    var tituloProducto = document.createElement("p") //vuelvo a cambiar el nombre de la variable 
    tituloProducto.classList.add("titulo") //se agrega el titulo
    tituloProducto.textContent = producto.nombre //Como ahora vamos en un foreach, cada ronda tiene un producto, y no es necesario usar el index dentro de productos[i]
    
    var imagen = document.createElement("img"); //lo dejamos con ese id porque es un poco mas entendible 
    imagen.setAttribute('src', producto.img); //cambiamos igual aqui por nuestro producto.img en lugar de productos[i]
  
    divDelProducto.appendChild(tituloProducto); //actualizamos con nuestros nuevos id's 
    divDelProducto.appendChild(imagen);
  
    listaDeProductos.appendChild(divDelProducto) //llamamos a nuestra lista de productos
  }
}
//Ahora llamamos a nuestra función 
listaProductos(productos);
const botonDeFiltro = document.querySelector("button");

//Función para filtrar
botonDeFiltro.onclick = function() {
  //Creo esto limpiaba la lista, pero ya mejor lo puse arriba 
  // while (li.firstChild) {
  //   li.removeChild(li.firstChild);
  // }

  const texto = filtro.value; //Cambiamos esto al nombre que pusimos más entendible
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );
  //Volvemos a omitir todo el ciclo for porque esta feo y me confunde un poco 
  listaProductos(productosFiltrados); //y mejor llamamos a nuestra función de listaproductos y le aplicamos el valor de productos filtrados con la const filtrado más abajo 
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  