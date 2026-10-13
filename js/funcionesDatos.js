function cargarArticulo(e){
  e.preventDefault();
  const id = listaPrecioArticulos.length + 1;
  const codigo = document.getElementById("idCrearArticuloCodigo").value;--idCrearArticuloCodigo
  const nombre = document.getElementById("idCrearArticuloNombre").value;
  const marca = document.getElementById("idCrearArticuloMarca").value;
  const categoria = document.getElementById("idCrearArticuloCategoria").value;
  const precio = document.getElementById("idCrearArticuloPrecio").value;
  const articuloNuevo = new Articulo(id, 
                                     codigo.toUpperCase(), 
                                     nombre.toUpperCase(), 
                                     marca.toUpperCase(), 
                                     categoria.toUpperCase(), 
                                     parseFloat(precio));
  listaPrecioArticulos.push(articuloNuevo);
};

function crearListadoConDescuento(e){
  e.preventDefault();
  const listado = document.getElementById("idListarArticulosTablaRegistro");
  const listadoTabla = document.getElementById("idListarArticulosTabla");
  const listadoTablaThead = document.getElementById("idListarArticulosTablaTitulos");
  const valorDescuento = document.getElementById("idListarArticulosDescuento").value;
  //
  if (valorDescuento > 0) {
     listado.innerHTML = "";
     listadoTabla.innerHTML = "";
     
     const tagTablaListadoTbody = document.createElement("tbody");
     tagTablaListadoTbody.id = "idListarArticulosTablaRegistro";     
     tagTablaListadoTbody.className = "listarArticulosTablaRegistro";
        
     const articulosDescuento = listaPrecioArticulos.map(articulo => {
        let precioDescuento = articulo.precio - (articulo.precio * (valorDescuento/100));
        return {
            id: articulo.id,
            codigo: articulo.codigo,
            nombre: articulo.nombre,
            marca: articulo.marca,
            categoria: articulo.categoria,
            precio: precioDescuento
        };
    });
     articulosDescuento.forEach(articulo => {
        const registro = document.createElement("tr");        
        registro.innerHTML = `
            <td>${articulo.id}</td>
            <td>${articulo.codigo.toUpperCase()}</td>
            <td>${articulo.nombre.toUpperCase()}</td>
            <td>${articulo.marca.toUpperCase()}</td>
            <td>${articulo.categoria.toUpperCase()}</td>
            <td>$${articulo.precio*0.10}</td>
        `;        
        tagTablaListadoTbody.appendChild(registro);
     });
     listadoTabla.appendChild(listadoTablaThead);
     listadoTabla.appendChild(tagTablaListadoTbody);
  } else {
    listado.innerHTML = "";
    listadoTabla.innerHTML = "";
     
    const tagTablaListadoTbody = document.createElement("tbody");
     tagTablaListadoTbody.id = "idListarArticulosTablaRegistro";     
     tagTablaListadoTbody.className = "listarArticulosTablaRegistro";
    //
    listaPrecioArticulos.forEach(articulo => {
        const registro = document.createElement("tr");        
        registro.innerHTML = `
            <td>${articulo.id}</td>
            <td>${articulo.codigo.toUpperCase()}</td>
            <td>${articulo.nombre.toUpperCase()}</td>
            <td>${articulo.marca.toUpperCase()}</td>
            <td>${articulo.categoria.toUpperCase()}</td>
            <td>$${articulo.precio}</td>
        `;        
        tagTablaListadoTbody.appendChild(registro);
    });
    listadoTabla.appendChild(listadoTablaThead);
    listadoTabla.appendChild(tagTablaListadoTbody);
  }
};

function crearListadoArticulosEncontrados(e){
  e.preventDefault();
  console.log("crearListadoArticulosEncontrados");
  const tagMain = document.getElementById("idMain");
  const tagDivContenedorResultadoBuscar = document.getElementById("idContenedorBuscarArticulosResultados");
  tagDivContenedorResultadoBuscar.innerHTML = "";
  const tagDivArticulosEncontrados = document.createElement("div");
  tagDivArticulosEncontrados.id = "idRegistrosEncontrados";
  tagDivArticulosEncontrados.className = "registrosEncontrados";
  const idBuscar = parseInt(document.getElementById("idBuscarArticulosId").value);
  const marcaBuscar = document.getElementById("idBuscarArticulosMarca").value;
  const categoriaBuscar = document.getElementById("idBuscarArticulosCategoria").value;
  console.log("idBuscar: " + idBuscar);
  console.log("marcaBuscar: " + marcaBuscar);
  console.log("categoriaBuscar: " + categoriaBuscar);

  let articulosEncontrados = [];

  if (listaPrecioArticulos.some(articulo => articulo.id == idBuscar)){
     let articuloEncontrado = listaPrecioArticulos.find(articulo => articulo.id == idBuscar);
     articulosEncontrados = [
        {          
          id: articuloEncontrado.id,
          codigo: articuloEncontrado.codigo,
          nombre: articuloEncontrado.nombre,
          marca: articuloEncontrado.marca,
          categoria: articuloEncontrado.categoria,
          precio: articuloEncontrado.precio
        }
      ];
  };
  //
  if (articulosEncontrados.length == 0) {
    if (categoriaBuscar.length > 0){
       articulosEncontrados = listaPrecioArticulos.filter(
         articulo => articulo.categoria.toUpperCase() == categoriaBuscar.toUpperCase()
       );
    };
  } else  {
      articulosEncontrados = articulosEncontrados.filter(
         articulo => articulo.categoria.toUpperCase() == categoriaBuscar.toUpperCase()
      );
  };
  //
  if (articulosEncontrados.length == 0) {
    if (marcaBuscar.length > 0){
       articulosEncontrados = listaPrecioArticulos.filter(
         articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())
       );
    };
  } else  {
      articulosEncontrados = articulosEncontrados.filter(
         articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())         
      );
  };
  //
  articulosEncontrados.forEach(articulo => {
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontrado";
        registro.className = "registroEncontrado";    
        registro.innerHTML = `
            <h6>ID: ${articulo.id}</h6>
            <h6>CODIGO: ${articulo.codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${articulo.nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${articulo.marca.toUpperCase()}</h6>
            <h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
            <h6>PRECIO: $${articulo.precio}</h6>
        `;        
        tagDivArticulosEncontrados.appendChild(registro);
    });
  //
  tagDivContenedorResultadoBuscar.appendChild(tagDivArticulosEncontrados);
  tagMain.appendChild(tagDivContenedorResultadoBuscar);
};

function crearListadoExistenciaArticulo(e){
  e.preventDefault();
  const tagMain = document.getElementById("idMain");
  const tagDivContenedorResultadoVerificar= document.getElementById("idContenedorResultadosVerificar");
  tagDivContenedorResultadoVerificar.innerHTML = "";
  const tagDivArticulosEncontrados = document.createElement("div");
  tagDivArticulosEncontrados.id = "idRegistrosEncontrados";
  tagDivArticulosEncontrados.className = "registrosEncontrados";
  const idCodigo = document.getElementById("idVerificarExistenciaArticuloCodigo").value;
  //
  let articulosEncontrados = [];
  //
  if (listaPrecioArticulos.some(articulo => articulo.codigo.toUpperCase() == idCodigo.toUpperCase() )) {
     let articuloEncontrado = listaPrecioArticulos.find(articulo => articulo.codigo == idCodigo.toUpperCase());
     articulosEncontrados = [
        {          
          id: articuloEncontrado.id,
          codigo: articuloEncontrado.codigo,
          nombre: articuloEncontrado.nombre,
          marca: articuloEncontrado.marca,
          categoria: articuloEncontrado.categoria,
          precio: articuloEncontrado.precio
        }
      ];
    };

    articulosEncontrados.forEach(articulo => {
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontrado";
        registro.className = "registroEncontrado";    
        registro.innerHTML = `
            <h6>ID: ${articulo.id}</h6>
            <h6>CODIGO: ${articulo.codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${articulo.nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${articulo.marca.toUpperCase()}</h6>
            <h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
            <h6>PRECIO: $${articulo.precio}</h6>
        `;        
        tagDivArticulosEncontrados.appendChild(registro);
    });
    //
    tagDivContenedorResultadoVerificar.appendChild(tagDivArticulosEncontrados);
    tagMain.appendChild(tagDivContenedorResultadoVerificar);
};

function verCarrito(e){
  e.preventDefault();
  console.log("ver carrito");
  const tagMain = document.getElementById("idMain");
  //
  const tagDivContenedorVerCarrito = document.getElementById("idContenedorVerCarrito");
  const tagDivContenedorVerCarritoElementos = document.getElementById("idContenedorVerCarritoElementos");
  tagDivContenedorVerCarrito.innerHTML = "";
  tagDivContenedorVerCarritoElementos.innerHTML = "";
  //
  const tagVerCarritoH3 = document.createElement("H3");
  tagVerCarritoH3.id = "idVerCarritoH3";
  tagVerCarritoH3.className = "verCarritoH3";
  tagVerCarritoH3.innerText = "Carrito de Compras";
  tagDivContenedorVerCarritoElementos.appendChild(tagVerCarritoH3);
  //
  const tagContenedorRegistroEncontradoCarrito = document.createElement("div");
  tagContenedorRegistroEncontradoCarrito.id = "idContenedorRegistroEncontradoCarrito";
  tagContenedorRegistroEncontradoCarrito.className = "contenedorRegistroEncontradoCarrito";
  //
  let totalCarrito = 0;
  carritoCompras.forEach( articulo =>{ 
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontradoCarrito";
        registro.className = "registroEncontradoCarrito";    
        registro.innerHTML = `
            <h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
            <h6>CODIGO: ${articulo.codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${articulo.nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${articulo.marca.toUpperCase()}</h6>
            <h6>CANIDAD: ${articulo.cantidad}</h6>
            <h6>PRECIO: $${articulo.precio}</h6>
            <h6>TOTAL: $${articulo.precio*articulo.cantidad}</h6>
        `;        
        totalCarrito += articulo.precio*articulo.cantidad;
        //tagDivContenedorVerCarritoElementos.appendChild(registro);
        tagContenedorRegistroEncontradoCarrito.appendChild(registro);
    }
  );
  tagDivContenedorVerCarritoElementos.appendChild(tagContenedorRegistroEncontradoCarrito);
  
  //
  const tagVerCarritoTotalP = document.createElement("p");
  tagVerCarritoTotalP.id = "idVerCarritoTotalP";
  tagVerCarritoTotalP.className = "verCarritoTotalP";
  tagVerCarritoTotalP.innerText = "Total del carrito: " + totalCarrito;
  tagDivContenedorVerCarritoElementos.appendChild(tagVerCarritoTotalP);

  tagDivContenedorVerCarrito.appendChild(tagDivContenedorVerCarritoElementos);
  tagMain.appendChild(tagDivContenedorVerCarrito);
  //
  //const tagDivContenedorMostrarCarrito = document.getElementById("idContenedorMostrarCarrito");
  //
  //tagDivContenedorVerCarrito.appendChild(tagDivContenedorElementosVerCarrito);
  //tagDivContenedorMostrarCarrito.appendChild(tagDivContenedorVerCarrito);
};

function ocultarCarrito(e){
  e.preventDefault();
  console.log("ocultar carrito");
  const tagDivContenedorVerCarritoElementos = document.getElementById("idContenedorVerCarritoElementos");
  tagDivContenedorVerCarritoElementos.innerHTML = "";
};

function vaciarCarrito(e){
  e.preventDefault();
  console.log("vaciar carrito");
  const tagDivContenedorVerCarritoElementos = document.getElementById("idContenedorVerCarritoElementos");
  tagDivContenedorVerCarritoElementos.innerHTML = "";
  carritoCompras.splice(0,carritoCompras.length);
};

function agregarAlCarrito(articulo, cantidad){
  console.log("agregar al carrito-id: " + articulo.id);
  articulo.cantidad = cantidad;
  console.log("agregar al carrito-cantidad: " + articulo.cantidad);
  const errorTexto = document.getElementById("idErrorAgregarCarrito"+articulo.id);
  if (carritoCompras.some(articuloCC => articuloCC.id == articulo.id)){
     console.log("id-ya existe: " + articulo.id);
     errorTexto.style.display = "block";
     setTimeout(() => {errorTexto.style.display = 'none';}, 3000);
  } else {
    console.log("id-no existe: " + articulo.id);
    carritoCompras.push(articulo);
  };
  //
  console.log("carritoCompras.length: " + carritoCompras.length);
  //
  if (carritoCompras.length > 0){
    //
    const tagMain = document.getElementById("idMain");
    const tagContenedorBuscarArticulosResultados = document.getElementById("idContenedorBuscarArticulosResultados");
    const tagDivContenedorMostrarCarrito = document.getElementById("idContenedorMostrarCarrito");
    const tagDivContenedorMostrarCarritoElementos = document.getElementById("idContenedorMostrarCarritoElementos");
    const tagDivContenedorMostrarCarritoBotones = document.getElementById("idContenedorMostrarCarritoBotones");
    //
    //tagDivContenedorMostrarCarrito.innerHTML = "";
    //tagDivContenedorMostrarCarritoElementos.innerHTML = "";
    //
    //const tagDivContenedorMostrarCarritoElementos = document.createElement("div");
    //tagDivContenedorMostrarCarritoElementos.id = "idContenedorMostrarCarritoElementos";
    //tagDivContenedorMostrarCarritoElementos.className = "contenedorMostrarCarritoElementos";
    //
    //const tagDivMostrarCarritoBotones = document.createElement("div");
    //tagDivMostrarCarritoBotones.id = "idMostrarCarritoBotones";
    //tagDivMostrarCarritoBotones.className = "mostrarCarritoBotones";
    const tagDivMostrarCarritoBotones = document.getElementById("idMostrarCarritoBotones");
    tagDivMostrarCarritoBotones.innerHTML = "";
    //
    const tagButtonVerCarrito = document.createElement("button");
    tagButtonVerCarrito.id = "idVerCarrito";
    tagButtonVerCarrito.className = "buttonCarrito";
    tagButtonVerCarrito.innerText = "Ver Carrito";
    tagButtonVerCarrito.addEventListener("click",verCarrito);
    //
    const tagButtonOcultarCarrito = document.createElement("button");
    tagButtonOcultarCarrito.id = "idOcultarCarrito";
    tagButtonOcultarCarrito.className = "buttonCarrito";
    tagButtonOcultarCarrito.innerText = "Ocultar Carrito";
    tagButtonOcultarCarrito.addEventListener("click",ocultarCarrito);
    //
    const tagButtonVaciarCarrito = document.createElement("button");
    tagButtonVaciarCarrito.id = "idVaciarCarrito";
    tagButtonVaciarCarrito.className = "buttonCarrito";
    tagButtonVaciarCarrito.innerText = "Vaciar Carrito";
    tagButtonVaciarCarrito.addEventListener("click",vaciarCarrito);
    //
    //tagDivContenedorMostrarCarritoElementos.appendChild(tagButtonVerCarrito);
    //tagDivContenedorMostrarCarritoElementos.appendChild(tagButtonOcultarCarrito);
    //tagDivContenedorMostrarCarritoElementos.appendChild(tagButtonVaciarCarrito);
    //tagDivContenedorMostrarCarrito.appendChild(tagDivContenedorMostrarCarritoElementos);
    //
    //
    tagDivMostrarCarritoBotones.appendChild(tagButtonVerCarrito);
    tagDivMostrarCarritoBotones.appendChild(tagButtonOcultarCarrito);
    tagDivMostrarCarritoBotones.appendChild(tagButtonVaciarCarrito);
    //tagDivContenedorMostrarCarrito.appendChild(tagDivContenedorMostrarCarritoElementos);
    //
    /*

    const tagDivMostrarCarritoBotones = document.createElement("div");
    tagDivMostrarCarritoBotones.id = "idMostrarCarritoBotones";
    tagDivMostrarCarritoBotones.className = "mostrarCarritoBotones";

    tagDivContenedorMostrarCarritoBotones.appendChild(tagDivMostrarCarritoBotones);

    */
   /*
    const tagDivContenedorVerCarrito = document.createElement("div");
    tagDivContenedorVerCarrito.id = "idContenedorVerCarrito";
    tagDivContenedorVerCarrito.className = "contenedorVerCarrito";
    //
    const tagDivContenedorVerCarritoElementos = document.createElement("div");
    tagDivContenedorVerCarritoElementos.id = "idContenedorVerCarritoElementos";
    tagDivContenedorVerCarritoElementos.className = "contenedorVerCarritoElementos";
    tagDivContenedorVerCarrito.appendChild(tagDivContenedorVerCarritoElementos);
    */

    tagDivContenedorMostrarCarritoBotones.appendChild(tagDivMostrarCarritoBotones);
    //tagDivContenedorMostrarCarritoBotones.appendChild(tagDivContenedorVerCarrito);
    //tagMain.appendChild(tagDivMostrarCarritoBotones);
  }
};

function crearFormularioComprar(e){
  e.preventDefault();
  console.log("crearFormularioComprar");
  const tagMain = document.getElementById("idMain");
  const tagDivContenedorResultadoBuscar = document.getElementById("idContenedorBuscarArticulosResultados");
  tagDivContenedorResultadoBuscar.innerHTML = "";
  const tagDivArticulosEncontrados = document.createElement("div");
  tagDivArticulosEncontrados.id = "idRegistrosEncontrados";
  tagDivArticulosEncontrados.className = "registrosEncontrados";
  const categoriaBuscar = document.getElementById("idBuscarArticulosCategoria").value;
  const marcaBuscar = document.getElementById("idBuscarArticulosMarca").value;
  console.log("categoriaBuscar: " + categoriaBuscar);
  console.log("marcaBuscar: " + marcaBuscar);

  let articulosEncontrados = [];
  
  if (categoriaBuscar.length > 0){
     articulosEncontrados = listaPrecioArticulos.filter(
         articulo => articulo.categoria.toUpperCase() == categoriaBuscar.toUpperCase()
     );
  };

  if (articulosEncontrados.length == 0) {
    if (marcaBuscar.length > 0){
       articulosEncontrados = listaPrecioArticulos.filter(
         articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())
       );
    };
  } else  {
      articulosEncontrados = articulosEncontrados.filter(
         articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())         
      );
  };
  //
  let ingreso;
  ingreso  = 0;
  articulosEncontrados.forEach(articulo => {
    ingreso += 1;
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontrado";
        registro.className = "registroEncontrado"; 
        //
        const tagRegistroEncontradoComprar = document.createElement("div");
        tagRegistroEncontradoComprar.id = "idRegistroEncontradoComprar";
        tagRegistroEncontradoComprar.className = "registroEncontradoComprar";
        //
        const tagH6Nombre = document.createElement("h6");
        tagH6Nombre.innerText = "NOMBRE: " + articulo.nombre.toUpperCase();
        tagRegistroEncontradoComprar.appendChild(tagH6Nombre);
        const tagH6Marca = document.createElement("h6");
        tagH6Marca.innerText = "MARCA: " + articulo.marca.toUpperCase();
        tagRegistroEncontradoComprar.appendChild(tagH6Marca);
        const tagH6Precio = document.createElement("h6");
        tagH6Precio.innerText = "PRECIO: " + articulo.precio;
        tagRegistroEncontradoComprar.appendChild(tagH6Precio);
        //
        const tagLabelCantidad = document.createElement("label");
        tagLabelCantidad.setAttribute("for", "idListarArticulosDescuento");
        tagLabelCantidad.className = "labelGlobal";
        tagLabelCantidad.innerText = "Cantidad: ";
        // carga el label en el div
        tagRegistroEncontradoComprar.appendChild(tagLabelCantidad);
        //
        const tagInputCantidad = document.createElement("input");
        tagInputCantidad.id = "idListarArticulosDescuento";
        tagInputCantidad.className = "inputGlobal";
        tagInputCantidad.name = "listarArticulosDescuento";
        tagInputCantidad.type = "number";
        tagInputCantidad.min = 1;
        tagInputCantidad.max = 99;
        tagInputCantidad.defaultValue = 1;
        tagRegistroEncontradoComprar.appendChild(tagInputCantidad);
        //
        const tagRegistroEncontradoBoton = document.createElement("div");
        tagRegistroEncontradoBoton.id = "idRegistroEncontradoComprarBoton";
        tagRegistroEncontradoBoton.className = "registroEncontradoComprarBoton";
        //
        const tagBotonComprar = document.createElement("button");
        tagBotonComprar.id = "idBotonComprar";
        tagBotonComprar.className = "buttonGlobal";
        tagBotonComprar.innerText = "Comprar";
        tagBotonComprar.addEventListener("click", () => agregarAlCarrito(articulo,tagInputCantidad.value));
        tagRegistroEncontradoBoton.appendChild(tagBotonComprar);        
        //
        const tagErrorAgregarCarrito = document.createElement("p");
        tagErrorAgregarCarrito.id = "idErrorAgregarCarrito"+ articulo.id;
        tagErrorAgregarCarrito.className = "errorAgregarCarrito";
        tagErrorAgregarCarrito.innerText = "Ya existe en el carrito";
        tagRegistroEncontradoBoton.appendChild(tagErrorAgregarCarrito);        
        //
        registro.appendChild(tagRegistroEncontradoComprar);
        registro.appendChild(tagRegistroEncontradoBoton);
        //
        tagDivArticulosEncontrados.appendChild(registro);
    });
  //
  // const tagDivContenedorMostrarCarrito = document.createElement("div");
  // tagDivContenedorMostrarCarrito.id= "idContenedorMostrarCarrito";
  // tagDivContenedorMostrarCarrito.className = "contenedorMostrarCarrito";
  // const tagDivContenedorMostrarCarritoElementos = document.createElement("div");
  // tagDivContenedorMostrarCarritoElementos.id= "idContenedorMostrarCarritoElementos";
  // tagDivContenedorMostrarCarritoElementos.className = "contenedorMostrarCarritoElementos";
  // tagDivContenedorMostrarCarrito.appendChild(tagDivContenedorMostrarCarritoElementos);
console.log("ebcibtradis: " + articulosEncontrados.length);
console.log("ebcibtradis: " + typeof articulosEncontrados.length);
let cant=0;
cant = parseInt(articulosEncontrados.lentgh);

//if (parseInt(articulosEncontrados.lentgh) > 0 ) {
//if (cant != 0 ) {
if (ingreso >= 1 ) {
  console.log("entosi")
    const tagDivContenedorMostrarCarritoBotones = document.createElement("div");
    tagDivContenedorMostrarCarritoBotones.id = "idContenedorMostrarCarritoBotones";
    tagDivContenedorMostrarCarritoBotones.className = "contenedorMostrarCarritoBotones";

    const tagDivMostrarCarritoBotones = document.createElement("div");
    tagDivMostrarCarritoBotones.id = "idMostrarCarritoBotones";
    tagDivMostrarCarritoBotones.className = "mostrarCarritoBotones";

    tagDivContenedorMostrarCarritoBotones.appendChild(tagDivMostrarCarritoBotones);

  tagDivContenedorResultadoBuscar.appendChild(tagDivArticulosEncontrados);
  tagMain.appendChild(tagDivContenedorResultadoBuscar);
  
    const tagDivContenedorVerCarrito = document.createElement("div");
    tagDivContenedorVerCarrito.id = "idContenedorVerCarrito";
    tagDivContenedorVerCarrito.className = "contenedorVerCarrito";
    //
    const tagDivContenedorVerCarritoElementos = document.createElement("div");
    tagDivContenedorVerCarritoElementos.id = "idContenedorVerCarritoElementos";
    tagDivContenedorVerCarritoElementos.className = "contenedorVerCarritoElementos";
    tagDivContenedorVerCarrito.appendChild(tagDivContenedorVerCarritoElementos);
   

    tagDivContenedorMostrarCarritoBotones.appendChild(tagDivContenedorVerCarrito);
  tagMain.appendChild(tagDivContenedorMostrarCarritoBotones);
  //tagMain.appendChild(tagDivContenedorMostrarCarrito);

} else {
  
  console.log("entono")
}
   
}

