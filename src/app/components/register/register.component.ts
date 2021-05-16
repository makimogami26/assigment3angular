import { Component, OnInit , OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService} from 'src/app/services/auth.service'
import { NgForm} from '@angular/forms'
import { Subscription} from 'rxjs'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserdata = {}
  model: any = {}
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
      }
    );
  }
 
  onregister(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.createUser(form.value.email, form.value.password ,form.value.nama);
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }

}

