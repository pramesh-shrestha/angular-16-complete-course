import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'template-driven-form';
  registrationForm: FormGroup;
  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
      }),
      email: new FormControl(null, [Validators.required, Validators.email]),

      usernameAndDate: new FormGroup({
        username: new FormControl(null, Validators.required),
        date: new FormControl(null, Validators.required),
      }),
      gender: new FormControl('male'),

      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('Nepal'),
        city: new FormControl(null, Validators.required),
        region: new FormControl(null),
        postal: new FormControl(null)
      }),
      skills: new FormArray([
        new FormControl(null)
      ]),

      experiences: new FormArray([])
    })
  }

  protected readonly onsubmit = onsubmit;

  onSubmit() {
    console.log(this.registrationForm);
  }

  get skills(): FormArray{
    return this.registrationForm.get('skills') as FormArray;
  }

  onAddSkills() {
    const control =  new FormControl(null);
    (this.registrationForm.get('skills') as FormArray).push(control);
  }

  onDeleteSkill(index: number) {
    (this.registrationForm.get('skills') as FormArray).removeAt(index);
  }
}
