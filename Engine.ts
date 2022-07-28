export class Engine {
    private _fuelLevel : number = 0;
    private _status: boolean = false;

    // By changing this variable to readonly I have in essence created a property constant.
    // the only subtle difference is that you can write once to the variable inside the constructor
    private readonly MAXIMUM_FUEL_CAPACITY: number;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }

    get fuelLevel(): number {
        return this._fuelLevel;
    }

    start() {
        this._status = true;
    }

    stop() {
        this._status = false;
    }

    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.
    addFuel(fuel : number) {
        this._fuelLevel = Math.min(fuel + this._fuelLevel, this.MAXIMUM_FUEL_CAPACITY);
    }

    get status(): boolean {
        return this._status;
    }
}