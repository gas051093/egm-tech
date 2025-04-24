const event_menu = (id_menu) => {
    const menu = document.getElementById(id_menu);
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
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
