const tabs = ()=>{
    function tabsSwitch(tabsItemSelector, activeClass, tabsContentSelector) {
        const tabsItem = document.querySelectorAll(tabsItemSelector),
              tabsContent = document.querySelectorAll(tabsContentSelector);
        
        tabsItem.forEach((tab, i)=>{
            if (tabsItem[0].classList.contains(activeClass)) {
                tab.addEventListener('click', (e)=>{
                    tabsItem.forEach((item, num)=>{
                        item.classList.remove(activeClass);
                        if (num == i) {
                            item.classList.add(activeClass);
                        }
                    });

                    tabsContent.forEach((item, num)=>{
                        item.style.display = 'none';
                        if (num == i) {
                            item.style.display = 'block';
                        }
                    });
                });
            } else {
                tab.addEventListener('click', (e)=>{
                    tabsItem.forEach((item, num)=>{
                        item.lastElementChild.classList.remove(activeClass);
                        if (num == i) {
                            item.lastElementChild.classList.add(activeClass);
                        }
                    });

                    tabsContent.forEach((item, num)=>{
                        item.style.display = 'none';
                        if (num == i) {
                            item.style.display = 'block';
                        }
                    });
                });
            }
        });
    }


    tabsSwitch('.glazing_block','active', '.glazing_content');
    tabsSwitch('.balcon_icons_img','do_image_more', '.big_img_item');
    tabsSwitch('.decoration_item', 'after_click', '.decoration_content_item');
};

export default tabs;