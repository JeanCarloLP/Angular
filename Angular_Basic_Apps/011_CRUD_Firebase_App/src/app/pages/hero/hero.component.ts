import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../models/hero.model';
import { NgForm } from '@angular/forms';
import { SHeroesService } from 'src/app/services/s-heroes.service';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: HeroModel = new HeroModel();

  constructor( private sHero: SHeroesService,
               private route: ActivatedRoute ) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');

    if ( id !== 'new') {
      this.sHero.getHeroe( id ).subscribe( (resp: HeroModel) => {
        this.hero = resp;
        this.hero.id = id;
      });
    }

  }

  save( form: NgForm ) {
    if ( form.invalid ) {
      console.log('not valid form');
      return;
    }

    swal.fire({
      title: 'Wait',
      text: 'Saving information',
      icon: 'info',
      allowOutsideClick: false
    });
    swal.showLoading();

    let petition: Observable<any>;

    if ( this.hero.id ) {
      petition = this.sHero.updateHero( this.hero );
    } else {
      petition = this.sHero.createHero( this.hero );
    }

    petition.subscribe( resp => {
      swal.fire({
        title: this.hero.name,
        text: 'Updated success',
        icon: 'success'
      });
    });
  }

}
