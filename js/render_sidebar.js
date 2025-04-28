const sidebar = document.getElementById("sidebar_cont");

const menus = [
    {
        nombre : "Inicio",
        sub_menu: [],
        ico: "home"
    },
    {
        nombre: "Ordenes",
        sub_menu: [],
        ico: "order"
    },
    {
        nombre: "Clientes",
        sub_menu: [],
        ico : "client"
    },
    {
        nombre: "Facturacion",
        sub_menu: ["Alta de Factura","Alta de presupuesto","Nota de credito", "Comprobantes","Metodos de pago"],
        ico: "billing"
    },
    {
        nombre: "Productos",
        sub_menu: ["Alta de productos", "Control de stock","categorias"],
        ico: "product"
    },
    {
        nombre: "Caja",
        sub_menu: ["Cierre diario", "Archivo de caja","Alta de cajas"],
        ico: "money"
    },
    {
        nombre: "Configuración",
        sub_menu: ["Datos de la empresa", "Usuarios", "Preferencias del sistema", "Seguridad"],
        ico: "config"
    },
    {
        nombre: "Cerrar sesión",
        sub_menu: [],
        ico: "lock"
    }
]

const render_menu = ()=>{
    menus.forEach(menu =>{
        let cont = document.createElement("button");
        cont.id = `btn_${menu.nombre}`;
        cont.className = "sidebar__item"
        if(menu.nombre === "Inicio"){
            cont.classList.add("sidebar__item--active")
        }
        cont.setAttribute("data-target", `content_${menu.nombre}`)
        cont.innerHTML = (
            `<img class="sidebar__ico me-3" src="assets/ico/${menu.ico}.svg" alt="">${menu.nombre}`
        )
        sidebar.appendChild(cont)
        if(menu.sub_menu.length){
            let container = document.createElement("div")
            container.id = `content_${menu.nombre}`
            container.className = "sidebar__submenu row justify-items-end m-0";
                for(const sub of menu.sub_menu){
                    let cont_sub = document.createElement("button");
                    cont_sub.id = (`btn_${sub}`)
                    cont_sub.className = "sidebar__menu";
                    cont_sub.innerHTML = (`${sub}`)
                    container.appendChild(cont_sub);
            }
            sidebar.appendChild(container);
        }
    } )
}
render_menu();
