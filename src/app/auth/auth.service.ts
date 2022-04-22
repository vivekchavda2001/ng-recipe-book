import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
export interface AuthResponse {
    idToken: string;
    refreshToken: string;
    expiresIn: string;
    registered?: boolean;
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {

    }
    signUp(email: string, password: string) {
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCfRZVojWXEuOK0Pe99Hb597MAiOjBxQUA', {
            email: email,
            password: password,
            returnSecureToken: true
        })
    }
    login(email: string, password: string) {
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCfRZVojWXEuOK0Pe99Hb597MAiOjBxQUA', {
            email: email,
            password: password,
            returnSecureToken: true
        })
    }
}