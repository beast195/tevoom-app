import { Injectable } from "@angular/core";

import { User } from "./user.model";

@Injectable()
export class LoginService {
    constructor() {

    }

    register(user: User) {
        return new Promise<Object>((resolve, reject) => {

           
        });
    }

    login(user: User) {
        return new Promise<Object>((resolve, reject) => {

        });
    }

    logout() {
    }
}