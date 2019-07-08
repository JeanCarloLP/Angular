import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    HeroesComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [ APP_ROUTING, BrowserModule ],
  providers: [ HeroesService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
