import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  post:any;  
   constructor(private fb: FormBuilder) { 
    this.myForm = fb.group({
      'imie' : [null, Validators.required],
      'nazwisko' : [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'godzina' : [null, Validators.compose([Validators.required, Validators.pattern("([0-1]{1}[0-9]{1}|20|21|22|23):[0-5]{1}[0-9]{1}")])]
    });
  }

    addPost(post) {
    alert("Post:"+post.imie + " " + post.nazwisko + " " + post.godzina)
  }
}
