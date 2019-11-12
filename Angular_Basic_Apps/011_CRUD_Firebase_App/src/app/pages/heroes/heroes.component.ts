import { Component, OnInit } from '@angular/core';
import { SHeroesService } from 'src/app/services/s-heroes.service';
import { HeroModel } from 'src/app/models/hero.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: HeroModel[] = [];

  loading = false;

  constructor( private sHeroes: SHeroesService ) { }

  ngOnInit() {
    this.loading = true;
    this.sHeroes.getHeroes().subscribe( resp =>  {
      this.heroes = resp;
      this.loading = false;
    });
  }

  deleteHero( hero: HeroModel, i: number ) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you really want to delete ${hero.name} data?`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
    }).then( resp => {
      if (resp.value ) {
        this.heroes.splice(i, 1);
        this.sHeroes.deleteHero( hero.id ).subscribe();
      }
    });
  }

}
