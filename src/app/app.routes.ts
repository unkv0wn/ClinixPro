import { Routes } from '@angular/router';
import { SchedulingComponent } from './pages/scheduling/scheduling.component';
import { FinancalComponent } from './pages/financal/financal.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  //{ path: '', component: LoginComponent },
  { path: 'index', component: HomeComponent },
  { path: 'agendamentos', component: SchedulingComponent },
  { path: 'financeiro', component: FinancalComponent },
];
