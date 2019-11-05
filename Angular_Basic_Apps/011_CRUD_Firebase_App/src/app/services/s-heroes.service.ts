import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroModel } from '../models/hero.model';
import { map } from 'rxjs/operators';
import { HeroesComponent } from '../pages/heroes/heroes.component';

@Injectable({
  providedIn: 'root'
})
export class SHeroesService {

  private url = 'https://crud-89ced.firebaseio.com';

  constructor( private http: HttpClient ) { }

  createHero( hero: HeroModel ) {
    return this.http.post(`${ this.url }/heroes.json`, hero).pipe(
      map( (data: any) => {
        hero.id = data.name;
        return hero;
      })
    );
  }
}
