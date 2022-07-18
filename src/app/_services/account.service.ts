import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models/user';
import { PeriodicElement } from '@app/_models/PeriodicElement';
//import { empDetail } from '@app/_models/empDetail.json'

@Injectable({ providedIn: 'root' })

export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

       
    ELEMENT_DATA: PeriodicElement[] = [
    {id: 1, firstname: 'John', lastname: "Joi", empId: 'Hf3'},
    {id: 2, firstname: 'Angrew', lastname: "Robert", empId: 'He5'},
    {id: 3, firstname: 'Lois', lastname: "Verge", empId: 'Li2'},
    {id: 4, firstname: 'Mahathi', lastname: "Mnda", empId: 'Be6'},
    {id: 5, firstname: 'Abhishek', lastname: "Mandal", empId: 'Bv6'},
    {id: 6, firstname: 'Roma', lastname: "Roy", empId: 'Ce4'},
    {id: 7, firstname: 'Shubham', lastname: "Modak", empId: 'Nj7'},
    {id: 8, firstname: 'Vishal', lastname: "Shinde", empId: 'Od5'},
    {id: 9, firstname: 'Augest', lastname: "Morsh", empId: 'Fl6'},
    {id: 10, firstname: 'Neon', lastname:"Ocsor", empId: 'Ne9'},
  ];


    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username:any, password:any) {
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    public getAll()
    {
        return this.ELEMENT_DATA;
    }
 
    getById(id: number) {
        return this.ELEMENT_DATA.find(x => x.id = id);
        //return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id:any, params:any) {
        // return this.http.put(`${environment.apiUrl}/users/${id}`, params)
        //     .pipe(map(x => {
        //         // update stored user if the logged in user updated their own record
        //         if (id == this.userValue.id) {
        //             // update local storage
        //             const user = { ...this.userValue, ...params };
        //             localStorage.setItem('user', JSON.stringify(user));

        //             // publish updated user to subscribers
        //             this.userSubject.next(user);
        //         }
        //         return x;
        //     }));

        return 1;
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }

}