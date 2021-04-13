//Tue Apr 13 01:27:49 CST 2021
// composite prototye and constructor
function Pa(name){
    this.name=name??'Pa';
}

Pa.prototype.response=function (){
    console.log(this.name+' is moving');
}

function Son(name){
    Pa.call(this,name);
}

Child.prototype=new Pa('Son');

