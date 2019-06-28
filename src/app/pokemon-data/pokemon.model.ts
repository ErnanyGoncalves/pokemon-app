export class Pokemon {
    public pokeNumber: number;
    public pokeName: string;
    public imagePath: string;
    public regionName: string;
    public type: string[];
    public isLegendary: boolean;
    public evolution: string[];

    constructor(pokeNumber: number, pokeName: string, imagePath: string, regionName: string, type: string[], isLegendary: boolean, evolution: string[]) {
        this.pokeNumber = pokeNumber;
        this.pokeName = pokeName;
        this.imagePath = imagePath;
        this.regionName = regionName;
        this.type = type;
        this.isLegendary = isLegendary;
        this.evolution = evolution;
    }
}