class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `this boat color is ${this.color}`;
  }

  // decorator is syntatic sugar
  // @testDecorator

  @logError
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log('oops, boat was sunk');
    }
  };
  // console.log('Target:', target);
  // console.log('Key:', key);
}
new Boat().pilot();

// testDecorator(Boat.prototype, 'pilot');
