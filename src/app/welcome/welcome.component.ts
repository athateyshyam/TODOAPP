import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name=''
  welcomeMessageFromService:string

  constructor(private route:ActivatedRoute,private Service:WelcomeDataService) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    //console.log(this.Service.executeHelloWorldBeanService())
    this.Service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    )

    //console.log('last line of getWelcomeMessage()')
    //console.log("get welcome message")
  }

  getWelcomeMessageWithParameter(){
    //console.log(this.Service.executeHelloWorldBeanService())
    this.Service.executeHelloServiceWithPathVariable(this.name).subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    )

    //console.log('last line of getWelcomeMessage()')
    //console.log("get welcome message")
  }


  handleSuccessfulResponse(response){
    this.welcomeMessageFromService=response.message
    //console.log(response)
    //console.log(response.message)
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService=error.error.message
    
  }
}
