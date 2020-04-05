import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const TYPEFORM_BASE_URL = 'https://api.typeform.com/';
const REGISTRATION_FORM_ID = 'u0uZtb'; 

@Injectable()
export class TypeFormService {
    
    constructor(private http: HttpClient){}

    getTypeFormData() {
      return this.http.get(TYPEFORM_BASE_URL + `/forms/${REGISTRATION_FORM_ID}/responses`, {
				headers: new HttpHeaders({
            'Access-Control-Alllow-Origin': '*',
            'Content-Type': 'application/json',
            'Content-Security-Policy': "script-src 'self' 'unsafe-eval'; object-src 'self'" 
        })
      });
    }
}
