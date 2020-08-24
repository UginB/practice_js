const tabs = ()=>{
    function tabsSwitch(tabsItemSelector, activeClass, tabsContentSelector) {
        const tabsItem = document.querySelectorAll(tabsItemSelector),
              tabsContent = document.querySelectorAll(tabsContentSelector);
        
        tabsItem.forEach((tab, i)=>{
            tab.addEventListener('click', (e)=>{
                tabsItem.forEach(item=>{
                    if (item.lastElementChild){
                        item.lastElementChild.classList.remove(activeClass); 
                    } else {
                        item.lastElementChild.classList.remove(activeClass); 
                    }
                });
                if (tab.lastElementChild) {
                    tab.lastElementChild.classList.add(activeClass);
                } else {
                    tab.classList.add(activeClass);
                }

                tabsContent.forEach((item, num)=>{
                    item.style.display = 'none';
                    if (num == i) {
                        item.style.display = 'flex';
                    }
                });
            });
        });
    }


    tabsSwitch('.glazing_block','active', '.glazing_content');
    tabsSwitch('.balcon_icons_img','do_image_more', '.big_img_item');
    tabsSwitch('.decoration_item', 'after_click', '.decoration_content_item');
};

export default tabs;