import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emailRequired: string = "Please enter your e-mail!";
  passwordRequired: string = "Please enter your password!";

  emailInvalid: string = "Email not valid!";
  passwordInvalid: string = "Password not valid!";

  authentificationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.authentificationForm = this.formBuilder.group({email:["",[Validators.required, Validators.email]],
                                                        password:["",[Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"),
                                                        ],],});
  }

  public getEmail(){
    this.authentificationForm.get("email");
  }
  public getPassword(){
    this.authentificationForm.get("password");
  }
}
