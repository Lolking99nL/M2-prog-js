class Dino
{
    constructor(naam, vleeseter, age)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.age = age;

        this.leeft = true;
        this.honger = true;
    }

    eetDino(dino)
    {
        dino.leeft = false
    }
}

class Plantdino
{
    constructor(naam, planteter, age)
    {
        this.naam = naam;
        this.planteter = planteter;
        this.age = age;

        this.leeft = true;
        this.honger = true;
    }
    eetPlant(plant)
    {
       plant.leeft = false
    }
    eetDino(dino)
    {
        dino.leeft = false
    }
}

class Plant
{
    constructor(naam)
    {
        this.naam = naam;
        this.leeft = true;
    }

}

let trex = new Dino("trex",true,20);
let velo = new Dino("velo",true,29);
let plantje = new Plant("plantje");
let Brachiosaurus = new Plantdino("Brachiosaurus",true,32)

console.log(Brachiosaurus);
console.log(trex);
console.log(velo);
console.log(plantje);

Brachiosaurus.eetPlant(plantje)
console.log(plantje);

trex.eetDino(Brachiosaurus);
console.log(Brachiosaurus);

console.log(`${Brachiosaurus.naam} eet de plant`)

console.log(`${trex.naam} eet de dino ${Brachiosaurus.naam}`)
