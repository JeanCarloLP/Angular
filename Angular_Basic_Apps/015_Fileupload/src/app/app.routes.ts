import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from './components/pictures/pictures.component';
import { LoadComponent } from './components/load/load.component';

const ROUTES: Routes = [
    { path: 'pictures', component: PicturesComponent },
    { path: 'load', component: LoadComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'pictures' }
];

export const APP_ROUTES = RouterModule.forRoot( ROUTES );
