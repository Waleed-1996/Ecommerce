// 17a. Let's practice OOP by creating a class that represents a car.
//      . Create a new file data/car.js,and create a class Car {}
//      . Give the Car class 2 properties:brand and model.Then,create 
//       a constructor that sets these 2 properties.
//       . Keep all properties public for new (we'll learn why in a later exercise).
//       . Use this class to generate a few car objects:
//         { brand: 'Toyota',model:'Corolla' }
//         {brand: 'Tesla',model: 'Model 3'}
//        .console.log the car objects
//        .In checkout.js,load data/car.js using the import '...'; syntax,and check
//         the console.
// 7b.Add method displayInfo() that console.logs `${brand} ${model}`
//        Run .displayInfo() for each car,and check the console.

// 17c.Add a speed property ,which represnts how fast the car is going.
//       .The speed should start at 0.
//       .Add 2 methods go() (increases speed by 5) and brake() (decreases 
//        speed by 5).
//       .The speed should be limited between 0 and 200.
//       .Update displayInfo() to display the speed at the end:
//       `${brand} ${model} , Speed: ${speed} km/h`
//       .Call go() and brake() a few times for each car,call displayInfo() and
//        check the console to confirm the code is working.
// 17d.Add isTrunkOpen property,which tracks if the car's trunk is open.
//       . Should be a boolean property (true = open,false = closed).
//       .Create openTrunk() and closetTrunk(),which opens/closes the trunk.
//       .openTrunk() should not work if the car is moving.
//       .go() should not work if the trunk is open.
//       .Update displayinfo() to display trunk info at the end.Try the code.

// 17e.Create a new class RaceCar which extends Car.
//       .Race cars go faster than normal cars,so the RaceCar has an additional
//        property acceleration.When using go() ,increase the speed by 
//        acceleration instead of 5,and update the topm speed to 300.
//       .Race cars do not have a trunk.Update openTrunk() and closeTrunk()
//       .Create a race car{brand: 'Mclaren' , model: 'F1' , acceleration:20}
//        and try the code.

// 17f.Make brand and model properties private (just like in real life,we
//       should not be able to change the brand and model of car!)
//      .Update displayInfo() with the private properties ,and try the code.
// 17g.Now.try making the speed property private.
//       . Update the rest of the code and try the code.
class Car {
    #model;
    #brand;
    #speed;
    isTrunkOpen;
    constructor(carDetails) {
        this.#model = carDetails.model;
        this.#brand = carDetails.brand;
        this.#speed = 0;
        this.isTrunkOpen = false;

    }
    displayInfo() {
        return `his brand ${this.#brand} his model ${this.#model} speed ${this.#speed}km trunk ${this.openOrCloseTrunk()}`;
    }
    go() {
        if (!this.isTrunkOpen) {
            if (!(this.#speed + 5 > 200)) {
                this.#speed = this.#speed + 5;
            }
        }

    }
    brake() {
        if (!(this.#speed - 5 < 0)) {
            this.#speed = this.#speed - 5;
        }
    }
    openTrunk() {
        if (!this.isTrunkOpen) {
            this.isTrunkOpen = true;
        }
    }
    closeTrunk() {
        this.isTrunkOpen = false;
    }
    openOrCloseTrunk(){
        if(this.isTrunkOpen){
            return 'open';
        }else{
            return 'close';
        }
    }
}
class RaceCar extends Car{
    acceleration;
    constructor(carDetails){
        super(carDetails);
        this.acceleration=carDetails.acceleration;
    }
    go(){
           if (!this.isTrunkOpen) {
            if (!(this.speed + this.acceleration > 300)) {
                this.speed = this.speed +  this.acceleration ;
            }
        }
    }
}
let cars = [
    {
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        brand: 'Tesla',
        model: 'Model 3'
    }
].map((carDetails) => {
    return new Car(carDetails);
});
const racecar=[{brand: 'Mclaren' , model: 'F1' , acceleration:20}].map((carDetails)=>{
return new RaceCar(carDetails);
})
console.log(cars);
console.log(cars[0].displayInfo());
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();

cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
console.log(cars[0].displayInfo());
cars[0].brake();
cars[0].brake();
cars[0].brake();
cars[0].brake();


console.log(cars[0].displayInfo());



