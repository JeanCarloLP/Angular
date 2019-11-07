import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroModel } from '../models/hero.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SHeroesService {

  private url = 'https://crud-89ced.firebaseio.com';

  constructor( private http: HttpClient ) { }

  createHero( hero: HeroModel ) {
    return this.http.post(`${this.url}/heroes.json`, hero).pipe(
      map( (data: any) => {
        hero.id = data.name;
        return hero;
      })
    );
  }

  deleteHero( id: string ) {
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }

  getHeroes() {
    return this.http.get(`${this.url}/heroes.json`).pipe(
      map( this.createArray )
    );
  }

  getHeroe( id: string ) {
    return this.http.get(`${ this.url }/heroes/${id}.json`);
  }

  private createArray( heroesObj: object ) {

    const heroes: HeroModel[] = [];

    console.log(heroesObj);

    if (heroesObj === null) {
      return [];
    } else {
      Object.keys( heroesObj ).forEach( key => {
        const hero: HeroModel = heroesObj[key];
        hero.id = key;

        heroes.push(hero);
      });
      return heroes;
    }

  }

  updateHero( hero: HeroModel ) {
    const heroTemp = {
      ...hero
    };

    delete heroTemp.id;
    return this.http.put(`${this.url}/heroes/${hero.id}.json`, heroTemp);
  }
}
