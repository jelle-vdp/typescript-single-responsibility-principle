import { Radio } from './Radio.js';
import { Engine } from './Engine.js';

export class Car {
    // It is convention to start property names in TypeScript with an underscore.
    // If you want to know why, remove the underscore and see if your compiler is throwing you an error!
    
    private _miles : number = 0;
    private _engine : Engine;
    private _radio : Radio;

    private readonly FUEL_MILEAGE: number = 10;

    constructor(engine: Engine, radio: Radio) {
        this._engine = engine;
        this._radio = radio;
    }

    get miles(): number {
        return this._miles;
    }

    get engine(): Engine {
        return this._engine;
    }

    get radio(): Radio {
        return this._radio;
    }

    drive() {
        if(this._engine.status === false || this._engine.fuelLevel <= 0) {
            // what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        
        this._engine.addFuel(1);
        this._miles += this.FUEL_MILEAGE;
    }
}