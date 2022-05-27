import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationService } from './../service/hard-coded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes'
  password = ''
  errorMessege = 'Invalid User'
  invalidUser = false

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardCodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit(): void {
  }

  handleLogin() {
    //console.log(this.username);
    //if(this.username==="in28minutes" && this.password==="dummy")
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidUser = false
    } else {
      this.invalidUser = true
    }
  }

  /* handleBasicAuthLogin() {
    //console.log(this.username);
    //if(this.username==="in28minutes" && this.password==="dummy")
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidUser = false
        },
        error => {
          console.log(error)
          this.invalidUser = true
        }

      )

  } */


  handleBasicAuthLogin() {
    // console.log(this.username);
    //if(this.username==="in28minutes" && this.password === 'dummy') {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidUser = false      
          },
          error => {
            console.log(error)
            this.invalidUser = true
          }
        )
  }

  handleJWTAuthLogin() {
    
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidUser = false      
          },
          error => {
            console.log(error)
            this.invalidUser = true
          }
        )
  }

}
