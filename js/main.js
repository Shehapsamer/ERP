


let toglle_menu_large = document.getElementById("toglle_menu_large");


toglle_menu_large.addEventListener("click", function () {
    nav_sidebar.classList.toggle("nav_sidebar-colse")
})

let allssssss = document.getElementById("content");


toglle_menu_large.addEventListener("click", function () {
    allssssss.classList.toggle("sssaaaaddff")
})

let toglle_menu = document.getElementById("toglle_menu");
let nav_sidebar = document.getElementById("nav_sidebar");

toglle_menu.addEventListener("click", function () {
    nav_sidebar.classList.toggle("open_nav_sidebar")
})

function clearAll   () {
    let clear = document.getElementById("clear");
    clear.classList.add("clear_2")
}
