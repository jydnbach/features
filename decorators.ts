class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `this boat color is ${this.color}`;
  }

  // decorator is syntatic sugar
  // @testDecorator

  @logError('oops boat was sunk in ocean..')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function testDecorator(target: any, key: string) {
  console.log(target.color);
  console.log(key);
}

// decorator factory
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
    // console.log('Target:', target);
    // console.log('Key:', key);
  };
}

// new Boat().pilot();

// testDecorator(Boat.prototype, 'pilot');
