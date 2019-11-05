import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../models/hero.model';
import { NgForm } from '@angular/forms';
import { SHeroesService } from 'src/app/services/s-heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: HeroModel = new HeroModel();

  constructor( private sHero: SHeroesService ) { }

  ngOnInit() {
  }

  save( form: NgForm ) {
    if ( form.invalid ) {
      console.log('not valid form');
      return;
    }

    this.sHero.createHero( this.hero ).subscribe( data => {
      console.log(data);
    });
  }

}
