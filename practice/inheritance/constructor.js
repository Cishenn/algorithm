//Tue Apr 13 01:21:34 CST 2021
//disadvantages: repeatly use method
function Patr(name){
    this.name=name??'Patr';
}

Patr.prototype.tell=function (){
    console.log('I\'m '+this.name);
}

function Child(name){
    return new Patr(name);
}

let c=new Child('Son');
c.tell();
