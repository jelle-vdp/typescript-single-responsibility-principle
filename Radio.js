export class Radio {
    constructor() {
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
    }
    // Take attention to these getter and setters
    get musicLevel() {
        return this._musicLevel;
    }
    set musicLevel(value) {
        this._oldMusicLevel = this.musicLevel;
        this._musicLevel = value;
    }
    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }
    turnMusicOff() {
        this._musicLevel = 0;
    }
}
