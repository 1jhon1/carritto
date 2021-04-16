const productos=[];
const tablaproductos = document.querySelector("#tabla-productos");
const botones = document.querySelectorAll(".tarjeta > button");

botones.forEach((boton)=>{
    boton.addEventListener("click",(evento)=>{
        evento.preventDefault();
        const tarjeta = boton.parentElement;

        const producto = {
            imagen: tarjeta.querySelector("img").src,
            nombre: tarjeta.querySelector("h3").textContent,
            precio: tarjeta.querySelector("div samp").textContent,
            cantidad:1
            
        }
        
    agregarproducto(producto);
   
    })
   
})



const agregarproducto= (producto)=>{
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${producto.imagen}" width=100>
        </td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
        </td>
    `;
    tablaproductos.appendChild(row);
}



const VaciarCarrito=(productos)=>{
    
    while(tablaproductos.firstChild){
        tablaproductos.removeChild(tablaproductos.firstChild);
    }

    return false;
}


   



  
