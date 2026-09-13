import { Routes } from '@angular/router';
import { LoginScreen } from './components/pages/auth/login-screen/login-screen';
import { Home } from './components/pages/home/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginScreen, 
    },
    {
        path: 'home',
        loadComponent: () => import('./components/pages/home/home').then(m => m.Home),
    },
    {
        path: '**',
        redirectTo: 'login',
    }
];
