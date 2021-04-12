//Tue Apr 13 01:27:49 CST 2021
// composite prototye and constructor
function Patr(name){
    this.name=name??'Patr';
}

Patr.prototype.response=()=>{
    console.log(this.name+' is moving');
}

function Child(name){
    return Patr(name);
}

Child.prototype=new Patr('Son');

