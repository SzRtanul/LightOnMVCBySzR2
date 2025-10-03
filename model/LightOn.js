export default class LightOn{
    constructor(oszlop=3){
        console.log(oszlop)
        this.oszlop=oszlop;
        this.hossz=oszlop*oszlop;
        this.table=[];
        this.nyert=false;
        this.vilagit=1;

        for(let i = 0; i<this.hossz; i++){         
            this.table.push(false);
        }
        const rand = Math.floor(Math.random()*this.hossz);
        console.log(rand)
       // this.table[rand] = true;
    }

    doKattint(hely){
        const both = !this.nyert && typeof hely === "number" && ((hely >>> 0) < this.hossz)
        if(both){
            for(let i = hely-(hely % this.oszlop>0 ? 1 : 0); i < hely + ((hely + 1) % this.oszlop == 0 ? 1 : 2); i++){
                this.table[i] = !this.table[i];
            }
            for(let i = hely-this.oszlop; i < this.oszlop+hely+1;i+=this.oszlop*2){
                if((i>>>0) < this.hossz) this.table[i] = !this.table[i];
            }
            this.nyert = this.#isNyero();
        }
        return both;
    }

    getTable(){
        return this.table;
    }

    #isNyero(){
        let both = true;
        for(let i = 0; i < this.hossz && both; i++){
            both = !this.table[i];
        }
        return both;
    }

    getVilagit(){
        return this.vilagit;
    }

    getNemVilagit(){

    }

    getNyert(){
        return this.nyert;
    }
}