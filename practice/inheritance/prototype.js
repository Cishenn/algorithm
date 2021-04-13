//Tue Apr 13 00:51:42 CST 2021
// two disadvantages: reference type and parament
function Patr(name){
    this.name=name ?? 'Patr';
}

Patr.prototype.greet=function(){
    console.log(this.name);
}

function Child(){

}

Child.prototype=new Patr('Son');

var c = new Child();
c.greet();
