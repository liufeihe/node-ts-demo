import 'reflect-metadata';

@Reflect.metadata('inClass', 'a')
class Test {
  @Reflect.metadata('inMethod', 'b')
  public hello(): string {
    return 'hello world.';
  }
}

console.log(Reflect.getMetadata('inClass', Test));
console.log(Reflect.getMetadata('inMethod', new Test(), 'hello'));
