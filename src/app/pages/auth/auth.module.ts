import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './forgotpassword/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { ResetPasswordComponent } from './resetpassword/reset.component';
import { SharedModule } from '../shared/shared.module';
import { MatchPassword } from '../shared/validation/match-password';
import { AuthRoutingModule } from './auth-routing.module';
@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    // ResetPasswordComponent,
    MatchPassword,
  ],
  imports: [AuthRoutingModule, SharedModule],
})
export class AuthModule {}
