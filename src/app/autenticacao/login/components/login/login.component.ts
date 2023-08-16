import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor (
    private fb: FormBuilder,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.gerarForm()
  }

  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logar() {
    if (this.form.invalid) {
      this._snackbar.open("Dados Inválidos", "Erro", { duration: 5000 });
      return;
    }
    alert(JSON.stringify(this.form?.value));
  }


}
