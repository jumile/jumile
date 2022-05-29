const menuLinks = document.querySelectorAll('.submenuLink');
const subMenus = document.querySelectorAll('.submenu');

menuLinks.forEach((link, i) => {   
    link.addEventListener('mouseenter', () => {
        //по наведению мыши на любую ссылку скрываем все подменю
        subMenus.forEach((sub) => {
            sub.style.opacity=0;
        });

        //получаем доступ к подменю, к-ое находится в том пункте, на к-ый навели мышь
        const li = link.parentElement;
        const submenu = li.querySelector('.submenu');
        
        // отображаем подменю
        submenu.style.opacity=1;      
    })
});

//скрываем подменю по щелчку в любом месте страницы
document.body.addEventListener('click', () => {
    subMenus.forEach((sub) => {
         sub.style.opacity=0;
    });     
});     