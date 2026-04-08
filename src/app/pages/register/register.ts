import { Component, Input } from '@angular/core';
import { ButtonIconComponent } from '../../components/button-icon-component/button-icon-component';
import { InputComponent } from '../../components/input-component/input-component';
import { AuthService } from '../../services/auth/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ButtonIconComponent, InputComponent],
  providers: [AuthService],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  @Input() email: string = "";
  @Input() name: string = "";
  @Input() password: string = "";
  @Input() confirmPassword: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  public register(): void{
    if(this.password !== this.confirmPassword){
      alert("Passwords do not match!");
      return;
    }
    this.authService.Register(this.name, this.email, this.password).subscribe(response => {
        if(response.status)
          alert("Registration successful!");
        else
          alert("Registration failed!");
    });
  }

  public redirecionarParaLogin(): void{
    this.router.navigate(['/login'])
  }
}
