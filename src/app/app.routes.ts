import { Routes } from '@angular/router';
import { Todopage } from './features/todopage/todopage';
//import { Dashbourd} from 'module';

export const routes: Routes = [
    {
        path: 'todos',
        component: Todopage
    }
];
