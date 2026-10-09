const menus = [ 
            // "Crea Articulos" ,
            // "Lista de Articulos" ,
            // "Lista de Articulos con Descuento" ,
            // "Buscar Articulo por Id" ,
            // "Buscar Articulo por Categoria" ,
            // "Buscar Articulo por Nombre" ,
            // "Verificar Existencia Articulo" ,
            // "Comprar"
            "Crear Articulos" ,
            "Listar Articulos" ,
            "Buscar Articulo" ,
            "Verificar Existencia Articulo" ,
            "Comprar"
];

const listaMenu = [
    {
        titulo: "Crear Articulo",
        clase: "crearArticulo",
        id: "idCrearArticulo"
    },
    {
        titulo: "Listar Articulos",
        clase: "listarArticulos",
        id: "idListarArticulos"
    },
    {
        titulo: "Buscar Articulos",
        clase: "buscarArticulos",
        id: "idBuscarArticulos"
    },
    {
        titulo: "Verificar Existencia Articulo",
        clase: "verificarExistenciaArticulo",
        id: "idVerificarExistenciaArticulo"
    },
    {
        titulo: "Comprar",
        clase: "comprar",
        id: "idComprar"
    }
];

const listaPrecioArticulos = [
      {
        id: 1,
        codigo: "TVS0033PCO01",
        nombre: "TELEVISOR SMART TV PHILCO 33 PULGADAS", 
        marca: "PHILCO",
        categoria: "TELEVISOR",
        precio: 331000
      },                                 
      {
        id: 2,
        codigo: "TVS0033PHI02",
        nombre: "TELEVISOR SMART TV PHILLIPS 33 PULGADAS", 
        marca: "PHILLIPS",
        categoria: "TELEVISOR",
        precio: 332000
      },                                 
      {
        id: 3,
        codigo: "TVS0033SAM03",
        nombre: "TELEVISOR SMART TV SAMSUNG 33 PULGADAS", 
        marca: "SAMSUNG",
        categoria: "TELEVISOR",
        precio: 333000
      },                                 
      {
        id: 4,
        codigo: "TVS0033JVL04",
        nombre: "TELEVISOR SMART TV JVL 33 PULGADAS",
        marca: "JVL",
        categoria: "TELEVISOR",
        precio: 334000
      },                                 
      {
        id: 5,
        codigo: "TVS0042PCO05",
        nombre: "TELEVISOR SMART TV PHILCO 42 PULGADAS",
        marca: "PHILCO",
        categoria: "TELEVISOR",
        precio: 425000
      },                                 
      {
        id: 6,
        codigo: "TVS0042PHI06",
        nombre: "TELEVISOR SMART TV PHILLIPS 42 PULGADAS",
        marca: "PHILLIPS",
        categoria: "TELEVISOR",
        precio: 426000
      },                                 
      {
        id: 7,
        codigo: "TVS0042SAM07",
        nombre: "TELEVISOR SMART TV SAMSUNG 42 PULGADAS",
        marca: "SAMSUNG",
        categoria: "TELEVISOR",
        precio: 427000
      },                                 
      {
        id: 8,
        codigo: "TVS0042JVL08",
        nombre: "TELEVISOR SMART TV JVL 42 PULGADAS", 
        marca: "JVL",
        categoria: "TELEVISOR",
        precio: 580000
      },                                 
      {
        id: 9,
        codigo: "COCESC009",
        nombre: "COCINA ESCORIAL",
        marca: "ESCORIAL",
        categoria: "COCINA",
        precio: 590000
      },                                 
      {
        id: 10,
        codigo: "COCDRE010",
        nombre: "COCINA DREAN",
        marca: "DREAN",
        categoria: "COCINA",
        precio: 510000
      },                                 
      {
        id: 11,
        codigo: "COCWHI011",
        nombre: "COCINA WHIRLPOOL", 
        marca: "WHIRLPOOL",
        categoria: "COCINA",
        precio: 511000
      },                                 
      {
        id: 12,
        codigo: "COCELE012",
        nombre: "COCINA ELECTROLUX", 
        marca: "ELECTROLUX",
        categoria: "COCINA",
        precio: 512000
      },                                 
      {
        id: 13,
        codigo: "HELELE0013",
        nombre: "HELADERA ELECTOLUX INVERTER NO FROST",
        marca: "ELECTROLUX",
        categoria: "HELADERA",
        precio: 1300000
      },                                 
      {
        id: 14,
        codigo: "HELWHI0014",
        nombre: "HELADERA WHIRLPOOL INVERTER NO FROST",
        marca: "WHIRLPOOL",
        categoria: "HELADERA",
        precio: 1400000
      },                                 
      {
        id: 15,
        codigo: "HELGAG0015",
        nombre: "HELADERA GAFA INVERTER",
        marca: "SAMSUNG",
        categoria: "HELADERA",
        precio: 1500000
      },                                 
      {
        id: 16,
        codigo: "HELDRE0016",
        nombre: "HELADERA DREAN INVERTER",
        marca: "DREAN",
        categoria: "HELADERA",
        precio: 1600000
      }
];

const carritoCompras = [];
class Articulo {
      constructor(id,
                  codigo, 
                  nombre, 
                  marca,
                  categoria,
                  precio){
        this.id = id,
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.categoria = categoria;
        this.precio = precio;
      };
};

function armarHeaderMenu(){
const tagHeader = document.querySelector("header");

const tagHeaderDivContenedor = document.createElement("div");
tagHeaderDivContenedor.className ="contenedorHeader";

const tagHeaderDivContenedorElementos = document.createElement("div");
tagHeaderDivContenedorElementos.className ="contenedorHeaderElementos";

const tagHeaderH1 = document.createElement("h1");
tagHeaderH1.className = "headerH1Menu";

tagHeaderH1.innerText = "MODULO DE ARTICULOS, PRECIOS, COMPRAS";
const tagHeaderNav = document.createElement("nav");
tagHeaderNav.className = "headerNavMenu";
const tagHeaderUl = document.createElement("ul");
tagHeaderUl.className = "headerUlMenu";

listaMenu.forEach(menu =>{
     let tagHeaderLiMenu = document.createElement("li");
     tagHeaderLiMenu.className = "opcionMenuTextoLi";
     let tagHeaderLiAMenu = document.createElement("a");
     tagHeaderLiAMenu.id = menu.id;
     tagHeaderLiAMenu.className = "opcionMenuTextoA";
    //  tagHeaderLiAMenu.className = menu.clase;
     tagHeaderLiAMenu.innerText = menu.titulo;
     tagHeaderLiMenu.appendChild(tagHeaderLiAMenu);
     tagHeaderUl.appendChild(tagHeaderLiMenu);
    }
);

tagHeaderNav.appendChild(tagHeaderUl);
tagHeaderDivContenedorElementos.appendChild(tagHeaderH1);
tagHeaderDivContenedorElementos.appendChild(tagHeaderNav);

tagHeaderDivContenedor.appendChild(tagHeaderDivContenedorElementos);
tagHeader.appendChild(tagHeaderDivContenedor);
}

armarHeaderMenu();

function guardarDatos(e){
  e.preventDefault();
  console.log("guardando datos");
  const id = listaPrecioArticulos.length + 1;
  const codigo = document.getElementById("idCodigo").value;
  const nombre = document.getElementById("idNombre").value;
  const marca = document.getElementById("idMarca").value;
  const categoria = document.getElementById("idCategoria").value;
  const precio = document.getElementById("idPrecio").value;
  const articuloNuevo = new Articulo(id, 
                                       codigo.toUpperCase(), 
                                       nombre.toUpperCase(), 
                                       marca.toUpperCase(), 
                                       categoria.toUpperCase(), 
                                       parseFloat(precio));
  listaPrecioArticulos.push(articuloNuevo);
}

function armarFormularioCrearArticulo(e){
    e.preventDefault();
    console.log("armar formulario crear articulo");
    const tagMain = document.querySelector("main");
    tagMain.innerHTML = "";
    //
    const tagDivContenedor = document.createElement("div");
    tagDivContenedor.className = "contenedorCrearArticulo";
    //
    const tagDivContenedorFormulario = document.createElement("div");
    tagDivContenedorFormulario.className = "contenedorFormulario";
    //
    const tagH2ContenedorFormulario = document.createElement("h2");
    tagH2ContenedorFormulario.className = "contenedorFormularioTitulo";
    tagH2ContenedorFormulario.innerText = "Cargar Articulo Nuevo";
    tagDivContenedorFormulario.appendChild(tagH2ContenedorFormulario);
    
    // crea tag form
    const tagFormulario = document.createElement("form");
    tagFormulario.id = "idFormularioArticulo";
    tagFormulario.addEventListener("submit", guardarDatos);
    //tagFormulario.action = "guardarDatos()";
    tagFormulario.method = "POST";
    /////////////////////////////////////////////////////////////
    /// crea el campo de ingreso codigo
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioCodigoDiv = document.createElement("div");
    tagFormularioCodigoDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioCodigoLabel = document.createElement("label");
    tagFormularioCodigoLabel.setAttribute("for", "idCodigo");
    tagFormularioCodigoLabel.innerText = "Codigo: ";
    // crea tag input
    const tagFormularioCodigoInput = document.createElement("input");
    tagFormularioCodigoInput.type = "text";
    tagFormularioCodigoInput.id = "idCodigo";
    tagFormularioCodigoInput.name = "codigo";
    tagFormularioCodigoInput.required = true;
    // carga el label en el div
    tagFormularioCodigoDiv.appendChild(tagFormularioCodigoLabel);
    // carga el input en el div
    tagFormularioCodigoDiv.appendChild(tagFormularioCodigoInput);
    // carga el div en el formulario
    tagFormulario.appendChild(tagFormularioCodigoDiv);
    
    /////////////////////////////////////////////////////////////
    /// crea el campo de ingreso nombre
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioNombreDiv = document.createElement("div");
    tagFormularioNombreDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioNombreLabel = document.createElement("label");
    tagFormularioNombreLabel.setAttribute("for", "idNombre");
    tagFormularioNombreLabel.innerText = "Nombre: ";
    // crea tag input
    const tagFormularioNombreInput = document.createElement("input");
    tagFormularioNombreInput.type = "text";
    tagFormularioNombreInput.id = "idNombre";
    tagFormularioNombreInput.name = "nombre";
    tagFormularioNombreInput.required = true;
    // carga el label en el div
    tagFormularioNombreDiv.appendChild(tagFormularioNombreLabel);
    // carga el input en el div
    tagFormularioNombreDiv.appendChild(tagFormularioNombreInput);
    // carga el div en el formulario
    tagFormulario.appendChild(tagFormularioNombreDiv);
    
    /////////////////////////////////////////////////////////////
    /// crea el campo de ingreso marca
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioMarcaDiv = document.createElement("div");
    tagFormularioMarcaDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioMarcaLabel = document.createElement("label");
    tagFormularioMarcaLabel.setAttribute("for", "idMarca");
    tagFormularioMarcaLabel.innerText = "Marca: ";
    // crea tag input
    const tagFormularioMarcaInput = document.createElement("input");
    tagFormularioMarcaInput.type = "text";
    tagFormularioMarcaInput.id = "idMarca";
    tagFormularioMarcaInput.name = "marca";
    tagFormularioMarcaInput.required = true;
    // carga el label en el div
    tagFormularioMarcaDiv.appendChild(tagFormularioMarcaLabel);
    // carga el input en el div
    tagFormularioMarcaDiv.appendChild(tagFormularioMarcaInput);
    // carga el div en el formulario
    tagFormulario.appendChild(tagFormularioMarcaDiv);
    /////////////////////////////////////////////////////////////
    /// crea el campo de categoria
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioCategoriaDiv = document.createElement("div");
    tagFormularioCategoriaDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioCategoriaLabel = document.createElement("label");
    tagFormularioCategoriaLabel.innerText = "Categoria: ";
    // crea tag select
    const tagFormularioCategoriaSelect = document.createElement("select");
    tagFormularioCategoriaSelect.id = "idCategoria";
    tagFormularioCategoriaSelect.name = "categoria";
    tagFormularioCategoriaSelect.required = true;
    //
    const tagSelectOptionValue1 = document.createElement("option");
    tagSelectOptionValue1.innerText = "Seleccione una categoria";
    tagSelectOptionValue1.value = "";
    tagFormularioCategoriaSelect.appendChild(tagSelectOptionValue1);
    //
    const tagSelectOptionValue2 = document.createElement("option");
    tagSelectOptionValue2.innerText = "TELEVISOR";
    tagSelectOptionValue2.value = "TELEVISOR";
    tagFormularioCategoriaSelect.appendChild(tagSelectOptionValue2);
    //
    const tagSelectOptionValue3 = document.createElement("option");
    tagSelectOptionValue3.innerText = "COCINA";
    tagSelectOptionValue3.value = "COCINA";
    tagFormularioCategoriaSelect.appendChild(tagSelectOptionValue3);
    //
    const tagSelectOptionValue4 = document.createElement("option");
    tagSelectOptionValue4.innerText = "HELADERA";
    tagSelectOptionValue4.value = "HELADERA";
    tagFormularioCategoriaSelect.appendChild(tagSelectOptionValue4);
    // carga el label en el div
    tagFormularioCategoriaDiv.appendChild(tagFormularioCategoriaLabel);
    // carga el select en el div
    tagFormularioCategoriaDiv.appendChild(tagFormularioCategoriaSelect);
    // carga el div en el formulario
    tagFormulario.appendChild(tagFormularioCategoriaDiv);    
    /////////////////////////////////////////////////////////////
    /// crea el campo de ingreso precio
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioPrecioDiv = document.createElement("div");
    tagFormularioPrecioDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioPrecioLabel = document.createElement("label");
    tagFormularioPrecioLabel.setAttribute("for", "idPrecio");
    tagFormularioPrecioLabel.innerText = "Precio: ";
    // crea tag input
    const tagFormularioPrecioInput = document.createElement("input");
    tagFormularioPrecioInput.type = "number";
    tagFormularioPrecioInput.id = "idPrecio";
    tagFormularioPrecioInput.name = "precio";
    tagFormularioPrecioInput.min = 0;
    tagFormularioPrecioInput.required = true;
    // carga el label en el div
    tagFormularioPrecioDiv.appendChild(tagFormularioPrecioLabel);
    // carga el input en el div
    tagFormularioPrecioDiv.appendChild(tagFormularioPrecioInput);
    // carga el div en el formulario
    tagFormulario.appendChild(tagFormularioPrecioDiv);
    ///////////////////////////////////////////////////////
    // crea el boton de submit
    //////////////////////////////////////////////////////
    const tagFormularioBoton = document.createElement("button");
    tagFormularioBoton.type = "submit";
    tagFormularioBoton.className = "botonGuardarFormulario";
    tagFormularioBoton.innerText = "Guardar";
    // carga el boton en el formulario
    tagFormulario.appendChild(tagFormularioBoton);

    tagDivContenedorFormulario.appendChild(tagFormulario);
    tagDivContenedor.appendChild(tagDivContenedorFormulario);
    tagMain.appendChild(tagDivContenedor);

};

const elementoCrearArticulo = document.getElementById("idCrearArticulo");
elementoCrearArticulo.addEventListener("click", armarFormularioCrearArticulo);

function mostrarListado(e){
  e.preventDefault();
  console.log("mostrar listado");
  const listado = document.getElementById("idTablaListadoTbody");
  const listadoTabla = document.getElementById("idTablaListado");
  const listadoTablaThead = document.getElementById("idTablaListadoThead");
  const valorDescuento = document.getElementById("idDescuento").value;

  if (valorDescuento > 0) {
     listado.innerHTML = "";
     listadoTabla.innerHTML = "";
     //listadoTablaThead.innerHTML = "";
     
     const tagTablaListadoTbody = document.createElement("tbody");
     tagTablaListadoTbody.className = "tablaListadoTbody";
     tagTablaListadoTbody.id = "idTablaListadoTbody";     
        
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
    //console.log("---Listado: " + listado.innerHTML);
    listado.innerHTML = "";
    listadoTabla.innerHTML = "";
    //console.log("---Listado2: " + listado.innerHTML);
     
    const tagTablaListadoTbody = document.createElement("tbody");
    tagTablaListadoTbody.className = "tablaListadoTbody";
    tagTablaListadoTbody.id = "idTablaListadoTbody";
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
}

function armarListarArticulos(e){
    e.preventDefault();
    const tagMain = document.querySelector("main");
    tagMain.innerHTML = "";
    //
    const tagDivContenedor = document.createElement("div");
    tagDivContenedor.className = "contenedorListarArticulos";
    //
    const tagDivContenedorListado = document.createElement("div");
    tagDivContenedorListado.className = "contenedorListado";
    //
    const tagH2ContenedorListado = document.createElement("h2");
    tagH2ContenedorListado.className = "contenedorListadoTitulo";
    tagH2ContenedorListado.innerText = "Lista de Articulos";
    tagDivContenedorListado.appendChild(tagH2ContenedorListado);
    //////////////////////////////
    
    const tagFormularioDescuentoLabel = document.createElement("label");
    tagFormularioDescuentoLabel.setAttribute("for", "idDescuento");
    tagFormularioDescuentoLabel.innerText = "Descuento: ";
    // carga el label en el div
    tagDivContenedorListado.appendChild(tagFormularioDescuentoLabel);
    //////////////////////////////
    const tagListadoDescuentoInput = document.createElement("input");
    tagListadoDescuentoInput.type = "number";
    tagListadoDescuentoInput.id = "idDescuento";
    tagListadoDescuentoInput.className = "descuentoLista";
    tagListadoDescuentoInput.name = "descuento";
    tagListadoDescuentoInput.min = 0;
    tagListadoDescuentoInput.max = 99;
    tagListadoDescuentoInput.defaultValue = 0;
    tagDivContenedorListado.appendChild(tagListadoDescuentoInput);
    //
    const tagTablaListado = document.createElement("table");
    tagTablaListado.className = "tablaListado";
    tagTablaListado.id = "idTablaListado";
    //    
    const tagTablaListadoThead = document.createElement("thead");
    tagTablaListadoThead.className = "tablaListadoThead";
    tagTablaListadoThead.id = "idTablaListadoThead";
    tagTablaListadoThead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Código</th>
            <th>Nombre del Artículo</th>
            <th>Marca</th>
            <th>Categoría</th>
            <th>Precio</th>
        </tr>
    `;
    //
    tagTablaListado.appendChild(tagTablaListadoThead);
    //    
    const tagTablaListadoTbody = document.createElement("tbody");
    tagTablaListadoTbody.className = "tablaListadoTbody";
    tagTablaListadoTbody.id = "idTablaListadoTbody";
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
     
    //
    tagTablaListado.appendChild(tagTablaListadoTbody);
    tagListadoDescuentoInput.addEventListener("change",mostrarListado);
    //
    tagDivContenedorListado.appendChild(tagTablaListado);
    tagDivContenedor.appendChild(tagDivContenedorListado);
    tagMain.appendChild(tagDivContenedor);

};

const elementoListarArticulos = document.getElementById("idListarArticulos");
elementoListarArticulos.addEventListener("click", armarListarArticulos);

function buscarArticulos(e){
  e.preventDefault();
  console.log("buscarArticulos");
  const tagMain = document.getElementById("idMain");
   
}

function armarBuscarArticulos(e){
    e.preventDefault();
    const tagMain = document.querySelector("main");
    tagMain.innerHTML = "";
    tagMain.id = "idMain";
    //
    const tagDivContenedor = document.createElement("div");
    tagDivContenedor.className = "contenedorBuscarArticulos";
    //
    const tagDivContenedorBuscarArticulos = document.createElement("div");
    tagDivContenedorBuscarArticulos.className = "contenedorFormulario";
    //
    const tagH2ContenedorBuscarArticulos = document.createElement("h2");
    tagH2ContenedorBuscarArticulos.className = "contenedorBuscarArticulosTitulo";
    tagH2ContenedorBuscarArticulos.innerText = "Buscar Articulos";
    tagDivContenedorBuscarArticulos.appendChild(tagH2ContenedorBuscarArticulos);
    
    // crea tag form
    const tagFormulario = document.createElement("form");
    tagFormulario.id = "idBuscarArticulo";
    tagFormulario.addEventListener("submit", buscarArticulos);
    //tagFormulario.action = "guardarDatos()";
    tagFormulario.method = "POST";
    
    /////////////////////////////////////////////////////////////
    /// crea el campo de ingreso id
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioIdDiv = document.createElement("div");
    tagFormularioIdDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioIdLabel = document.createElement("label");
    tagFormularioIdLabel.setAttribute("for", "idID");
    tagFormularioIdLabel.innerText = "ID: ";
    // crea tag input
    const tagFormularioIdInput = document.createElement("input");
    tagFormularioIdInput.type = "text";
    tagFormularioIdInput.id = "idID";
    tagFormularioIdInput.name = "ID";
    // carga el label en el div
    tagFormularioIdDiv.appendChild(tagFormularioIdLabel);
    // carga el input en el div
    tagFormularioIdDiv.appendChild(tagFormularioIdInput);
    // carga el div en el formulario
    tagFormulario.appendChild(tagFormularioIdDiv);    
    /////////////////////////////////////////////////////////////
    /// crea el campo de ingreso marca
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioMarcaDiv = document.createElement("div");
    tagFormularioMarcaDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioMarcaLabel = document.createElement("label");
    tagFormularioMarcaLabel.setAttribute("for", "idMarca");
    tagFormularioMarcaLabel.innerText = "Marca: ";
    // crea tag input
    const tagFormularioMarcaInput = document.createElement("input");
    tagFormularioMarcaInput.type = "text";
    tagFormularioMarcaInput.id = "idMarca";
    tagFormularioMarcaInput.name = "marca";
    tagFormularioMarcaInput.required = true;
    // carga el label en el div
    tagFormularioMarcaDiv.appendChild(tagFormularioMarcaLabel);
    // carga el input en el div
    tagFormularioMarcaDiv.appendChild(tagFormularioMarcaInput);
    // carga el div en el formulario
    tagFormulario.appendChild(tagFormularioMarcaDiv);
    /////////////////////////////////////////////////////////////
    /// crea el campo de categoria
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioCategoriaDiv = document.createElement("div");
    tagFormularioCategoriaDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioCategoriaLabel = document.createElement("label");
    tagFormularioCategoriaLabel.innerText = "Categoria: ";
    // crea tag select
    const tagFormularioCategoriaSelect = document.createElement("select");
    tagFormularioCategoriaSelect.id = "idCategoria";
    tagFormularioCategoriaSelect.name = "categoria";
    tagFormularioCategoriaSelect.required = true;
    //
    const tagSelectOptionValue1 = document.createElement("option");
    tagSelectOptionValue1.innerText = "Seleccione una categoria";
    tagSelectOptionValue1.value = "";
    tagFormularioCategoriaSelect.appendChild(tagSelectOptionValue1);
    //
    const tagSelectOptionValue2 = document.createElement("option");
    tagSelectOptionValue2.innerText = "TELEVISOR";
    tagSelectOptionValue2.value = "TELEVISOR";
    tagFormularioCategoriaSelect.appendChild(tagSelectOptionValue2);
    //
    const tagSelectOptionValue3 = document.createElement("option");
    tagSelectOptionValue3.innerText = "COCINA";
    tagSelectOptionValue3.value = "COCINA";
    tagFormularioCategoriaSelect.appendChild(tagSelectOptionValue3);
    //
    const tagSelectOptionValue4 = document.createElement("option");
    tagSelectOptionValue4.innerText = "HELADERA";
    tagSelectOptionValue4.value = "HELADERA";
    tagFormularioCategoriaSelect.appendChild(tagSelectOptionValue4);
    // carga el label en el div
    tagFormularioCategoriaDiv.appendChild(tagFormularioCategoriaLabel);
    // carga el select en el div
    tagFormularioCategoriaDiv.appendChild(tagFormularioCategoriaSelect);
    // carga el div en el formulario
    tagFormulario.appendChild(tagFormularioCategoriaDiv);  
    ///////////////////////////////////////////////////////
    // crea el boton de submit
    //////////////////////////////////////////////////////
    const tagFormularioBoton = document.createElement("button");
    tagFormularioBoton.type = "submit";
    tagFormularioBoton.className = "botonBuscarFormulario";
    tagFormularioBoton.innerText = "Buscar";
    // carga el boton en el formulario
    tagFormulario.appendChild(tagFormularioBoton);

    tagDivContenedorBuscarArticulos.appendChild(tagFormulario);
    tagDivContenedor.appendChild(tagDivContenedorBuscarArticulos);
    tagMain.appendChild(tagDivContenedor);
};

const elementoBuscarArticulos = document.getElementById("idBuscarArticulos");
elementoBuscarArticulos.addEventListener("click",armarBuscarArticulos);

function verificarExistenciaArticulo(){
   console.log("Verificar Existencia Articulos");
};

function armarVerificarExistenciaArticulo(e){
    e.preventDefault();
    console.log("armar VerificarExistenciaArticulo");
    const tagMain = document.querySelector("main");
    tagMain.innerHTML = "";
    //
    const tagDivContenedor = document.createElement("div");
    tagDivContenedor.className = "contenedorVerificarExistenciaArticulo";
    //
    const tagDivContenedorVerificarExistenciaArticulo = document.createElement("div");
    tagDivContenedorVerificarExistenciaArticulo.className = "contenedorFormulario";
    //
    const tagH2ContenedorVerificarExistenciaArticulo = document.createElement("h2");
    tagH2ContenedorVerificarExistenciaArticulo.className = "contenedorVerificarExistenciaArticuloTitulo";
    tagH2ContenedorVerificarExistenciaArticulo.innerText = "Verificar Existencia Articulo";
    tagDivContenedorVerificarExistenciaArticulo.appendChild(tagH2ContenedorVerificarExistenciaArticulo);
    
    // crea tag form
    const tagFormulario = document.createElement("form");
    tagFormulario.id = "idVerificarExistenciaArticulo";
    tagFormulario.addEventListener("submit", verificarExistenciaArticulo);
    //tagFormulario.action = "guardarDatos()";
    tagFormulario.method = "POST";
    
    /////////////////////////////////////////////////////////////
    /// crea el campo de ingreso codigo
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioCodigoDiv = document.createElement("div");
    tagFormularioCodigoDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioCodigoLabel = document.createElement("label");
    tagFormularioCodigoLabel.setAttribute("for", "idCodigo");
    tagFormularioCodigoLabel.innerText = "Codigo: ";
    // crea tag input
    const tagFormularioCodigoInput = document.createElement("input");
    tagFormularioCodigoInput.type = "text";
    tagFormularioCodigoInput.id = "idCodigo";
    tagFormularioCodigoInput.name = "codigo";
    tagFormularioCodigoInput.required = true;
    // carga el label en el div
    tagFormularioCodigoDiv.appendChild(tagFormularioCodigoLabel);
    // carga el input en el div
    tagFormularioCodigoDiv.appendChild(tagFormularioCodigoInput);
    // carga el div en el formulario
    tagFormulario.appendChild(tagFormularioCodigoDiv);
    ///////////////////////////////////////////////////////
    // crea el boton de submit
    //////////////////////////////////////////////////////
    const tagFormularioBoton = document.createElement("button");
    tagFormularioBoton.type = "submit";
    tagFormularioBoton.className = "botonVerificarExistenciaArticuloFormulario";
    tagFormularioBoton.innerText = "Buscar";
    // carga el boton en el formulario
    tagFormulario.appendChild(tagFormularioBoton);

    tagDivContenedorVerificarExistenciaArticulo.appendChild(tagFormulario);
    tagDivContenedor.appendChild(tagDivContenedorVerificarExistenciaArticulo);
    tagMain.appendChild(tagDivContenedor);

};

const elementoVerificarExistenciaArticulo = document.getElementById("idVerificarExistenciaArticulo");
elementoVerificarExistenciaArticulo.addEventListener("click", armarVerificarExistenciaArticulo);

function armarComprarArticulos(e){
  e.preventDefault();
  alert("armarComprarArticulos")
};

const elementoComprarArticulos = document.getElementById("idComprar");
elementoComprarArticulos.addEventListener("click", armarComprarArticulos);
