export function classDecorator(constructor: Function) {
	console.log('classDecorator')
	constructor.prototype.hello = function(msg: string) {
		console.log('hello', msg)
	} 
}

export function methodDecorator() {
	console.log('methodDecorator')
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		// descriptor.enumerable = value;
		console.log(target, propertyKey, descriptor)
	};
}

export function propertyDecorator() {
  console.log('propertyDecorator')
}