import { Component, Input } from '@angular/core';
import { ButtonIconComponent } from '../../components/button-icon-component/button-icon-component';
import { InputComponent } from '../../components/input-component/input-component';
import { AuthService } from '../../services/auth/auth-service';

@Component({
  selector: 'app-login',
  imports: [ButtonIconComponent, InputComponent],
  providers: [AuthService],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  @Input() email: string = '';
  @Input() password: string = '';

  constructor(private authService: AuthService) {}

  public login(): void{
    this.authService.Login(this.email, this.password).subscribe(response => {
        console.log(response);
    })
  }
}
