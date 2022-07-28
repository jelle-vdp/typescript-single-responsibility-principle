export class Engine {
    constructor(MAXIMUM_FUEL_CAPACITY) {
        this._fuelLevel = 0;
        this._status = false;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    get fuelLevel() {
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
    addFuel(fuel) {
        this._fuelLevel = Math.min(fuel + this._fuelLevel, this.MAXIMUM_FUEL_CAPACITY);
    }
    get status() {
        return this._status;
    }
}
