import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  authentificationForm = this.formBuilder.group({
    email: [
      "",
      [
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ],
    ],
    password: [
      "",
      [
        Validators.pattern(
          "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
        ),
      ],
    ],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

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
  // Error Messages
  public errorMessages = {
    email: [
      // { type: "required", message: "This field is required" },
      { type: "pattern", message: "This is not a valid email address" },
    ],
    password: [
      // { type: "required", message: "This field is required" },
      { type: "pattern", message: "This is not a valid password" },
    ],
  };
}
