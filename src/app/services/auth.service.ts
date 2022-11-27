
export class AuthService{
    loggedIn = false;

    login(){
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }

    AuthenticatedUser(){
        return this.loggedIn;
    }
}