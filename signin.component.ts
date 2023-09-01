import { Component } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SignInComponent {
  loginStatus:any=sessionStorage.getItem("loginStatus");

  constructor(private service:LibraryServiceService, private router:Router)
  {
  }



  signin(email:any, password:any)
  {

    this.service.signin(email,password).subscribe(

      response => {

        console.log(response);
        alert('login successful');
        sessionStorage.setItem("loginStatus","active");
        sessionStorage.setItem("email",email);
        sessionStorage.setItem("userId",response.userId);
        sessionStorage.setItem("userRole",response.userRole);
        sessionStorage.setItem("userName",response.userName);
        this.router.navigate(['library']);
    },

    () => { alert('Wrong email Id or password!!');  }

    );



  }

}