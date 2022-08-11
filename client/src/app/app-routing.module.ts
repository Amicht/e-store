import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from './guards/logged.guard';
import { ErrorComponent } from './pages/error/error.component';
import { MainComponent } from './pages/main/main.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { OrderComponent } from './pages/order/order.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'order', component:OrderComponent, canActivate:[LoggedGuard]},
  {path:'success-order', component:OrderSuccessComponent, canActivate:[LoggedGuard]},
  {path:'store', component:MainComponent, canActivate:[LoggedGuard]},
  {path:'', component:SignInComponent},
  {path:'**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
