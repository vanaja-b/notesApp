import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {
  constructor(private http: HttpClient,) { }

  setToken(key, value) {
    window.localStorage.setItem(key, value);

  }
  getToken(key) {
    return window.localStorage.getItem(key);
  }
}

