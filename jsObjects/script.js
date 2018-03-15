// myObject = new Object();
// myObject.info = "Jestem zupełnie nowym obiektem";
// function myFunction(){
//     alert(this.info);
// };
// myObject.funk = myFunction;

// var person = {
//     name: "Paweł",
//     surname: "Karpik",
//     print: function(){
//         console.log(this.name)
//     }
// }

// function Animal(getName, getSound){
// 	this.name = getName
// }

// var dog = new Animal("Reksio","wow wow");


// function Person(name){
//     this.name = name;
//     this.sayHi = function(){
//     return "Hi " + this.name;
//     }
// }
// elie = new Person("Elie");


// // inna opcja to poniższy zapis

// function Person(name){
//     this.name = name;
// }

// Person.prototype.sayHi = function(){
//     return "Hi " + this.name;
// }
// elie = new Person("Elie");
// elie.sayHi();

// // Exercise

// function Vehicle(make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.isRunning = false;
// }

// Vehicle.prototype.turnOn = function(){
//     return this.isRunning = true;
// }
// Vehicle.prototype.turnOff = function(){
//     return this.isRunning = false;
// }
// Vehicle.prototype.honk = function(){
//     if (this.isRunning){
//     return "beep!";
//     }
// }


//-----------------------------------------------------------------------------------------------------------------------------------------
//najprostszy zapis OBIEKTU za pomocą LITERAŁU 

var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

//----------------------------------------------------------------------------------------------------------------------------------------- 
// TWORZENIE OBIEKTU NA BAZIE OBIEKTU WBUDOWANEGO
myNewObject = new Object;    /* dodaję właściwość */
myNewObject.info = 'Jestem Pawła nowym obiektem';
console.log('fist stage: '+ myNewObject.info); 


function myFunc(){       /* dodaję metodę  */
    alert("ale zabawa");
};
myNewObject.showInfo = myFunc;

// dodaję drugą metodę
function myFuncSecond(){
    alert(this.info);
};
myNewObject.showInfoSecond = myFuncSecond;

// -------------------------------------------------------------------------------
// UWAGA! ładniej można to napisać za pomocą FUNKCJI ANONIMOWEJ! 

myNewObject.showInfoThird = function() {
    alert('we have made it!');
}

// poniżej znajduje się wywołanie funkcji - UWAGA! samo "showInfo" nic by nie dało
// ponieważ odwoływałoby się do obiektu nadrzędnego Window a nie mojego myNewObject.

myNewObject.showInfo();  
myNewObject.showInfoSecond();
myNewObject.showInfoThird();

console.log('last stage: '+ myNewObject.info); 

// ----------------------------------------------------------------------------------------------------------------------------------------
// TWORZENIE OBIEKTU za pomocną WYRAŻENIA FUNKCYJNEGO inaczej poprzez użycie FUNKCJI KONSTRUKTORA OBIEKTU

function myNewObjectType(){
    this.info = 'Też jestem obiektem';
    this.showInfo = function(){
        alert(this.info); /* wyświetlam zapisane powyżej info */
    }
    this.setInfo = function (newInfo) {
        this.info = newInfo;  /* ta druga metoda pobiera argument newInfo i używa
        go do nadpisania wartości właściwośći info */
    }
}

// -----------------------------------------------------------------------------------------------------------------------------------------
// TWORZENIE INSTANCJI OBIEKTÓW a więc obiektów posiadających metody i właściwości zdefioniowane w głównej funkcji konstruktora 

var x = myNewObject.info;
var myNewObject1 = new myNewObjectType();  /* widać więc zmienną, nazwę nowego obiektu oraz słowo kluczowe new i niejako wywołanie funkcji konstruktora */
var myNewObject2 = new myNewObjectType();  

console.log(myNewObject1.showInfo()); /* wywołuję metodę stworzoną dla obiektu myNewObjectType */
console.log(myNewObject1.setInfo("Oto nowe informacje obiektowe!")); /* nadpisanie właściwość info */

//-----------------------------------------------------------------------------------------------------------------
// użycie funkcji KONSTRUKTORA przyjmującej ARGUMENTY

// ----------------------------------------------------------------------------------------------------------------------------------------
// ROZSZERZANIE OBIEKTÓW - słowo kluczowe PROTOTYPE - jest niezbędne gdy do obiektu zostały już utworzone instancje. 
//                         prototype nadaje nowe metody i właściwości zarówno obiektowi jak i jego instancjom.


