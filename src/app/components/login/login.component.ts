import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/services/auth.service'
import { NgForm} from '@angular/forms'
import { Subscription} from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
      }
    );
  }
 
  onLogin(form: NgForm){
    if(form.invalid){
      return;
    }
    this.authService.login(form.value.email, form.value.password,form.value.Nama);
  }
 
  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }

}
