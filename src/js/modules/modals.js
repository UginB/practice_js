const modals = () => {
    function bindModal(modalSelector, triggerSelector, closeClass) {
        const modal = document.querySelector(modalSelector),
              trigger = document.querySelectorAll(triggerSelector);

        trigger.forEach(item => {
            item.addEventListener('click',(e)=>{
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        }); 

        modal.addEventListener('click',(e)=>{
            if(e.target === modal || e.target.classList.contains(closeClass) || e.target.parentElement.classList.contains(closeClass)) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    function showModalByTimer(modalSelector, time) {
        setTimeout(()=> {
            document.querySelector(modalSelector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        },time);
    }

    bindModal('.popup_engineer', '.popup_engineer_btn', "popup_close");
    bindModal('.popup', '.phone_link',"popup_close");
    showModalByTimer('.popup', 60000);
    bindModal('.popup_calc', '.glazing_price_btn', "popup_calc_close")
};

export default modals;