import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SearchComponent } from './pages/search/search.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'favorites', component: FavoritesComponent},
    {path: 'search', component: SearchComponent},
    {path: 'wallet', component: WalletComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
