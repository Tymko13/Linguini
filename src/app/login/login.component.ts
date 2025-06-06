import {Component, computed, effect, inject, signal} from '@angular/core';
import {NgIf} from '@angular/common';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule, ValidationErrors,
  Validators
} from '@angular/forms';
import {AuthService} from '../_auth/auth.service';
import {Router} from '@angular/router';
import {ToastService} from '../_services/toast.service';

@Component({
  selector: 'app-login',
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  fb = inject(NonNullableFormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  toastify = inject(ToastService);

  constructor() {
    effect(() => {
      if (this.reg()) {
        this.form.controls.passwordConfirm.setValidators([Validators.required]);
        this.form.controls.username.setValidators([Validators.required]);
        this.form.setValidators(this.passwordsMatch());
      } else {
        this.form.controls.passwordConfirm.clearValidators();
        this.form.controls.username.clearValidators();
        this.form.clearValidators();
      }
      this.form.controls.passwordConfirm.updateValueAndValidity();
      this.form.controls.username.updateValueAndValidity();
      this.form.updateValueAndValidity();
    });
  }

  passwordsMatch() {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirm = control.get('passwordConfirm')?.value;

      return password === confirm ? null : {passwordsMismatch: true};
    };
  }

  form = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required]
  }, {validators: this.passwordsMatch()});

  onSubmit() {
    if (this.form.valid) {
      if (this.reg()) {
        this.authService.signUp(this.form.value.email!, this.form.value.password!, this.form.value.username!)
          .subscribe({
            next: () => this.router.navigate(['home']),
            error: (error) => this.error = this.errorToMessage(error.code)
          });
      } else {
        this.authService.login(this.form.value.email!, this.form.value.password!)
          .subscribe({
            next: () => this.router.navigate(['home']),
            error: (error) => this.error = this.errorToMessage(error.code)
          });
      }
    }
  }

  errorToMessage(errorCode: string): string {
    console.log(errorCode);
    switch (errorCode) {
      case 'auth/invalid-email':
      case 'auth/invalid-credential':
        return "Пошта або пароль невірні.";
      case 'auth/email-already-in-use':
        return 'Акаунт із цією поштою вже існує.'
      default:
        return "Сталась неочікувана помилка. Будь ласка спробуйте ще раз пізніше.";
    }
  }

  error: string = '';

  reg = signal(true);
  header = computed(() => {
    return this.reg() ? "Створити акаунт" : "Увійти в акаунт";
  });
  suggestion = computed(() => {
    return this.reg() ? "Вже маєш свій акаунт?" : "Ще не маєш акаунта?";
  });
  button = computed(() => {
    return this.reg() ? "УВІЙТИ" : "СТВОРИТИ";
  });
}
