import LightOnController from "./controller/LightOnController.js";
import LightOn from "./model/LightOn.js";
import LightOnView from "./view/LightOnView.js";

console.log("Unsign: "+(-3>>>0))

export const listeners=[];

window.addEventListener("load", ()=>{
     new LightOnController(new LightOn(), new LightOnView(document));
});