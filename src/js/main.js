import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import timer from "./modules/timer";

window.addEventListener('DOMContentLoaded', ()=>{
    modals();
    tabs();
    timer(".sale", '2020-12-18');
});