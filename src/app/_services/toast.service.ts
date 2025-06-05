import { Injectable } from '@angular/core';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  show(msg: string, success: boolean) {
    Toastify({
      text: msg,
      duration: 3000,
      gravity: "bottom",
      position: "center",
      style: {background: success ? 'green' : 'red'},
      close: true
    }).showToast();
  }
}
