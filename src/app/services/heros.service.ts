import { Injectable } from '@angular/core';

export interface Hero {
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    index?: number;
}

@Injectable()
export class HerosService {


    private heros: Hero[] = [
        {
            nombre: "Aquaman",
            bio: "Aquaman's most recognized power is the telepathic ability to communicate with marine life, which it can summon over great distances.",
            img: "assets/img/aquaman.png",
            aparicion: "1941-11-01",
            casa: "DC"
        },
        {
            nombre: "Batman",
            bio: "Batman's main traits are summarized in << physical prowess, deductive abilities and obsession >>. Most of the basic characteristics of the comics have varied due to the different interpretations that have been given to the character.",
            img: "assets/img/batman.png",
            aparicion: "1939-05-01",
            casa: "DC"
        },
        {
            nombre: "Daredevil",
            bio: "Having lost his sight, Daredevil's remaining four senses were heightened by radiation to superhuman levels, in the accident he had as a child. Despite his blindness, he can see through a sixth sense that serves as a radar similar to that of bats. ",
            img: "assets/img/daredevil.png",
            aparicion: "1964-01-01",
            casa: "Marvel"
        },
        {
            nombre: "Hulk",
            bio: "His main power is his ability to increase his strength to virtually unlimited levels while increasing his fury. Depending on which Hulk personality is in command at the time (the Hulk Banner is the weakest, but he makes up for it with his intelligence).",
            img: "assets/img/hulk.png",
            aparicion: "1962-05-01",
            casa: "Marvel"
        },
        {
            nombre: "Linterna Verde",
            bio: "Possessor of the ring of power who possesses the ability to create manifestations of solid light through the use of thought. It is fueled by the Green Flame (revised by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which a lamp maker named Chang found) ",
            img: "assets/img/linterna-verde.png",
            aparicion: "1940-06-01",
            casa: "DC"
        },
        {
            nombre: "Spider-Man",
            bio: "After being bitten by a radioactive spider, he obtained the following superhuman powers, great strength, agility, being able to climb walls. Spider-Man's strength allows him to lift 10 tons or more. Thanks to this great strength Spider-Man he can perform unbelievable jumps. A spider sense, which lets him know if danger is looming over him before it happens. Sometimes it can lead Spider-Man to the source of danger. ",
            img: "assets/img/spiderman.png",
            aparicion: "1962-08-01",
            casa: "Marvel"
        },
        {
            nombre: "Wolverine",
            bio: "In the fictional universe of Marvel, Wolverine has regenerative powers that can heal any wound, no matter how deadly it may be, and that same power makes him immune to any disease existing on Earth and some extraterrestrials. He also has superhuman strength Although it does not compare to that of other superheroes like the Hulk, it does surpass that of any human. ",
            img: "assets/img/wolverine.png",
            aparicion: "1974-11-01",
            casa: "Marvel"
        }
    ];
    constructor() {
        console.log("HerosService ready to work!");
    }

    getHeros = (): Hero[] => this.heros;

    getHero = (i: number): Hero => this.heros[i];

    getIndex = (neededHero: Hero): number => {
        let index: number = 0;
        this.heros.forEach((hero, i) => {
            if(neededHero === hero) index = i;
        });
        return index;
    }

    searchHeros = ( term: string ) => {
        let herosArr: Hero[] = [];
        term = term.toLowerCase();

        // this.heros.forEach(hero => {
        //     let nombre = hero.nombre.toLowerCase();
        //     if( nombre.indexOf( term ) >= 0){
        //         herosArr.push(hero)
        //     }
        // });

        for( let i=0; i<this.heros.length; i++){
            let hero = this.heros[i];
            let nombre = hero.nombre.toLowerCase();
            if( nombre.indexOf( term ) >= 0){
                hero.index = i;
                herosArr.push(hero)
            }
        }

        return herosArr;
    }

}
