import { Routes } from '@angular/router';
import { SchedulingComponent } from './pages/scheduling/scheduling.component';
import { FinancalComponent } from './pages/financal/financal.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { PatientComponent } from './pages/patient/patient.component';
import { MedicalComponent } from './pages/medical/medical.component';
import { ServicesComponent } from './pages/services/services.component';
import { PaymentsComponent } from './pages/payments/payments.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: '',
    component: IndexComponent,
    children: [
      { path: 'index', component: HomeComponent },
      { path: 'agendamentos', component: SchedulingComponent },
      { path: 'financeiro', component: FinancalComponent },
      { path: 'pacientes', component: PatientComponent },
      { path: 'medicos', component: MedicalComponent },
      { path: 'servicos', component: ServicesComponent },
      { path: 'pagamentos', component: PaymentsComponent },
    ]
  }
];
