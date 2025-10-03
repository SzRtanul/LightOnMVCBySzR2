import LightOn from "../model/LightOn.js";
import LightOnView from "../view/LightOnView.js";

export default class LightOnController{
    constructor(model = new LightOn(), view = new LightOnView()){
        this.model = model;
        this.view = view;
       // console.log("G")
        view.doMegjelen(model.getTable());
        let i = 0;
        for(const button of view.getLampak()){
            const it = i;
            button.addEventListener("click", ()=>{
                if(!model.getNyert()){
                    this.#kattint(it);
                    if(model.getNyert()) view.doEredmenyeketKiir();
                } 
            });
            i++;
        }
    }

    #kattint(it){
        this.model.doKattint(it);
        console.log(it)
        this.view.doFrissit(this.model.getTable());
    }
}