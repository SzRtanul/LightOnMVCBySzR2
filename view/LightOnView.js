export default class LightOnView {
    constructor(environment){
        this.lampak=[];
        this.environment=environment;
    }

    doMegjelen(table=[]){
        let mezs = "";
        for(let i = 0; i < table.length; i++){
            mezs += `<button class='lampa${table[i] ? " vilagit" : ""}'></button>`;
        }
        //console.log("EN: " + mezs)
        this.environment.getElementsByClassName("LightOn")[0].innerHTML = mezs;
        this.lampak = this.environment.querySelectorAll(".lampa");
    }

    doFrissit(table=[]){
        //console.log(this.lampak)
        console.log(table)
        for(let i = 0; i < table.length; i++){
            this.lampak[i].classList[table[i] ? "add" : "remove"]("vilagit")
        }
        console.log(this.lampak)
    }

    doNyertView(){

    }

    getLampak(){
        return this.lampak;
    }
}