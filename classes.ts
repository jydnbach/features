class Vehicle {
  //initial function
  constructor(public color: string) {} // public modifier is a shortcut for boilerplate

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
// vehicle.honk(); // not allowed bc honk is protected
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color); // ref to constructor in parent
  }

  private drive(): void {
    // private doesn't mean security. it restricts developers to call it
    console.log('vroom'); // overrides Vehicle
  }

  startDrivingProcess(): void {
    this.drive();
    // this.honk(); // not allowed
    this.honk; // thanks to protected
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car2 = new Car(4, 'red');
car2.startDrivingProcess();
// car2.honk();
