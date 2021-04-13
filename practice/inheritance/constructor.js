//Tue Apr 13 01:21:34 CST 2021
//disadvantages: repeatly use method
function Patri(name){
    this.name=name??'Patri';
}

Patri.prototype.tell=function (){
    console.log('I\'m '+this.name);
}

function Kid(name){
    Patri.call(this,name);
}

var c=new Kid('Son');
c.tell();
