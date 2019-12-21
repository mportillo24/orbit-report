export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning(): boolean {
        if (this.type === 'Space Debris') {
            return true;
        } else {
            return false;
        }
        // shouldShowWarning returns true if the satellite type is 'Space Debris', and it returns false otherwise. Note that this check should be case-insensitive.
    }
}
