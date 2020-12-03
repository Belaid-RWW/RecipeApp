import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {

  emailRequiredField :string = "Email is required";
  emailInvalid :string = "Email is invalid";
  passwordRequiredField :string = "Password is required";
  passwordInvalid :string = "Password is invalid";

  authentificationForm : FormGroup ;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.authentificationForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
          ),
        ],
      ],
    });
  }

  public submit() {
    //Validation des données
    //if(données == valide (format))
    //Send to server
    //Navigation
  }
  // Get Form Fields Values
  getEmail() {
    this.authentificationForm.get("email");
  }
  getPassword() {
    this.authentificationForm.get("password");
  }
}
