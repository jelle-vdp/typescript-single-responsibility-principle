export class Radio {    
    private _musicLevel : number = 0;
    private _oldMusicLevel : number = 50;
    
    // Take attention to these getter and setters
    get musicLevel(): number {
        return this._musicLevel;
    }

    set musicLevel(value: number) {
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