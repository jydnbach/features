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
  console.log('Target:', target);
  console.log('Key:', key);
}

// testDecorator(Boat.prototype, 'pilot');
