import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const TYPEFORM_BASE_URL = 'https://api.typeform.com/';
const REGISTRATION_FORM_ID = 'u0uZtb'; 

@Injectable()
export class TypeFormService {
    
    constructor(private http: HttpClient){}

    getTypeFormData() {
      console.log(process.env.TYPE_FORM_TOKEN, 'token');
      return this.http.get(TYPEFORM_BASE_URL + `/forms/${REGISTRATION_FORM_ID}/responses`, {
				headers: new HttpHeaders({
            'Access-Control-Alllow-Origin': '*',
            'Authorization': `Bearer ${process.env.TYPE_FORM_TOKEN}`,
            'Content-Type': 'application/json',
            'Content-Security-Policy': "script-src 'self' 'unsafe-eval'; object-src 'self'" 
        })
      });
  }
}
