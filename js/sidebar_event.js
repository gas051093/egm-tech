function close_menu(){
    const conten_items = document.querySelectorAll(".sidebar__submenu");
    conten_items.forEach (item=>{
        item.style.display = "none"
    })
}
function close_display(id_menu) { 
    const displays = document.querySelector(`[data-d="display"]`);
    const sub_menu = document.getElementById(id_menu)
    if(!sub_menu){
        displays.style.display = "none";
    }
}
function disagree_item(){
    const items = document.querySelectorAll(".sidebar__item");
    items.forEach(item =>{
        item.classList.remove("sidebar__item--active");
    })
}
const event_menu = (id_menu) => {
    const menu = document.getElementById(id_menu);
    if(!menu){
        close_menu()
    } else if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        close_menu();
        menu.style.display = "block";
    }
};
const item_active = (item_id) =>{
    const item_selec = document.getElementById(item_id);
    item_selec.classList.add ("sidebar__item--active");
};
const display_dash = (id_menu, btn_sub) => {
    close_display(btn_sub);
  const display = document.querySelector(`[data-target="${id_menu}"]`)
    display.style.display = "flex";
};
function item_event(){
    const btn_item = document.querySelectorAll(".sidebar__item")
    btn_item.forEach (button =>{
        button.addEventListener("click", (e) =>{
            const btn_target = e.currentTarget.getAttribute("data-target");
            const btn_id = e.currentTarget.id;
                disagree_item();
                item_active(btn_id);
                event_menu(btn_target);
                display_dash(btn_id, btn_target);
        })
    })
}


item_event();