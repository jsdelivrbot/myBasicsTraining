myObject = new Object();
myObject.info = "Jestem zupełnie nowym obiektem";
function myFunction(){
    alert(this.info);
};
myObject.funk = myFunction;

var person = {
    name: Paweł;
    surname: Karpik;
    print: function(){
        console.log(this.name)
    }
}


function Animal(getName, getSound){
	this.name = getName;
	this.sound = getSound(){
	console.log(getSound)
        }
}

var dog = new Animal("Reksio","wow wow");
	dog.sound();
