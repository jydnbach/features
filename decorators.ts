class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `this boat color is ${this.color}`;
  }

  // decorator is syntatic sugar
  // @testDecorator
  pilot(): void {
    console.log('swish');
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Target:', target);
  console.log('Key:', key);
}

testDecorator(Boat.prototype, 'pilot');
