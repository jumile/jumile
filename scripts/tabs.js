const tabsHandlers = document.querySelectorAll('[data-tabs-handler]');
const tabsContents = document.querySelectorAll('[data-tabs-content]');
const tabsLinks = document.querySelectorAll('.tabs a');

tabsLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });    
});

tabsHandlers.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabsHandlers.forEach((item) => {
            if(item === tab) item.classList.add('tab_active');
            else item.classList.remove('tab_active');
        });
        tabsContents.forEach((content) => {
            if(content.dataset.tabsContent === tab.dataset.tabsHandler) content.classList.remove('hidden');
            else content.classList.add('hidden');
        });
    })
});
