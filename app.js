//Imprimir el titulo de la pag
console.log("El titulo de esta pagina es: ", document.title);

let titulo = document.querySelector("#titulo-principal");

console.log(titulo);
//extraer contenido de la etiqueta y editarlo
console.log(titulo.textContent);
titulo.textContent = "Editado desde JavaScript"
titulo.style.color = "peru";
titulo.style.backgroundColor = "pink";
titulo.style.fontSize = "1.5rem";

//Agregar texto sin borrar lo anterior
titulo.textContent = titulo.textContent + "Texto Nuevo";
titulo.textContent += "Otro texto nuevo";

//titulo.innerHTML ="Hola";

let parrafo = document.querySelector("#parrafoPrin");
parrafo.innerHTML += "Nuevo texto <i> Pero este texto esta en cursiva</i>"; 

let caja1 = document.querySelector("#caja1");

caja1.innerHTML += "<p>Producto Muestra $1200 </p>";

//caja1.classList.add("aprobado");
//``

/*
let presupuesto = prompt("Introdcuce tu presupuesto");
if (presupuesto >=1200) {
    caja1.classList.add("aprobado");
}else{
    caja1.classList.add("no-aprobado")
};
    */

const bodega = [
    {nombre:"Prodcuto1", precio:100, stock: 3},
    {nombre:"Prodcuto2", precio:150, stock: 2},
    {nombre:"Prodcuto3", precio:300, stock: 0},
    {nombre:"Prodcuto4", precio:600, stock: 5}
];

let caja = document.querySelector(".caja-producto");

bodega.forEach(item =>{
    let claseColor = "";

    if (stock >0) {
        claseColor = "aprobado";
    } else {
        claseColor = "no-aprobado";
    }


    caja.innerHTMLv += `
        <div class= "caja-producto ${claseColor}">
        <h2> ${item.nombre}</h2>
        <p> Prcio: ${item.precio}</p>
        <p> Stock: ${item.stock}</p>
        </div>
    `;
});