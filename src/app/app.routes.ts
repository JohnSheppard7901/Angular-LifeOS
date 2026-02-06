import { Routes } from '@angular/router';
import { Todopage } from './features/todopage/todopage';
import { Layout } from './layout/layout';
import { Login } from './auth/login/login';
import { Dashboard } from './features/dashboard/dashboard';
import { Habittracker } from './features/habittracker/habittracker';

export const routes: Routes = [ 
    {
        path: '',
        component: Layout,
        children: [
            { path: '', redirectTo:'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: Dashboard },
            { path: 'todos', component: Todopage },
            { path: 'habits', component: Habittracker}
        ]
    },
    {
        path: 'login',
        component: Login        
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
