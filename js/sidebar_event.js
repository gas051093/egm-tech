function close_menu(){
    conten_items = document.querySelectorAll(".sidebar__submenu")
    conten_items.forEach (item=>{
        item.style.display = "none"
    })
}
const event_menu = (id_menu) => {
    const menu = document.getElementById(id_menu);
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        close_menu();
        menu.style.display = "block";
    }
};

function item_event(){
    btn_item = document.querySelectorAll(".sidebar__item")
    btn_item.forEach (button =>{
        button.addEventListener("click", (e) =>{
            const btn_target = e.currentTarget.getAttribute("data-target");
            event_menu(btn_target);
        })
    })
}

item_event();