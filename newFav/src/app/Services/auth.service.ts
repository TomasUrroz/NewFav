import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { User } from '../Interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  clientId: string = 'b99ec7ea57094eceac46a5aceee0198b';

  clientSecret: string = '6f95a92e52e34fc5a838b62d29d85d6d';
  params: any = new URLSearchParams(window.location.search);
  code: any = this.params.get('code');




  private url: string = 'http://localhost:4000/users'
  private user?: User;



  constructor(private http: HttpClient, private router: Router) { }



  get currentUser(): User | undefined {
    if (!this.user) return undefined
    //structuredClone(this.user)
    return { ...this.user };
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

  verificarUserAndPass(user: string, pass: string) {

    this.getUsers().subscribe(users => {
      users.find(u => {
        if (u.password === pass && u.user === user) {
          this.user = u;
          localStorage.setItem('token', u.id!.toString())
          this.router.navigate(['/profile'])
        }
      });
    });
  }

  checkStatusAutenticacion(): Observable<boolean> {
    const token = localStorage.getItem('token')
    if (!token) {
      return of(false)
    }
    return this.http.get<User>(`${this.url}/${token}`)
      .pipe(
        tap(u => this.user = u),
        map(u => !!u),
        catchError(err => of(false))
      )
  }

  logout() {
    this.user = undefined;
    localStorage.clear()
  }

}
