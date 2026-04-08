import { Component, Input } from '@angular/core';
import { ButtonIconComponent } from '../../components/button-icon-component/button-icon-component';
import { InputComponent } from '../../components/input-component/input-component';
import { AuthService } from '../../services/auth/auth-service';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) {}

  public login(): void{
    this.authService.Login(this.email, this.password).subscribe(response => {
        console.log(response);
        if(response.status)
          alert("Login successful!");
        else
          alert("Login failed!");
    });
  };

  public redirecionarParaRegister(): void{
    this.router.navigate(['/register'])
  }
}
