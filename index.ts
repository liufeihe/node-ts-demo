import { methodDecorator, classDecorator } from  './src/util/decorator';

@classDecorator
class App {
  private a: number;
	constructor() {
		this.a = 1
	}

	@methodDecorator()
	public run() {
		console.log(this.a)
	}

	public print() {
		console.log('print')
	}
}

function main() {
  console.log('hello world.')
  const app = new App()
  app.run();
  // app.hello('world.')
}

main()