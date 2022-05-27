import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]

  message:string
  // =[
  //   new Todo(1,'Going to jim',false,new Date()),
  //   new Todo(2,'Going to Math class',false,new Date()),
  //   new Todo(3,'Going to India',true,new Date())
  //   // {id:1,description:'Going to morning walk.'},
  //   // {id:2,description:'Going to Math class.'},
  //   // {id:3,description:'Learn Java.'},
  // ]

  constructor(
    private todoService:TodoDataService,
    private router:Router
    ) { }

  ngOnInit(): void {
   this.refreshTodos()
  }

  refreshTodos(){
    this.todoService.retriveAllTodos('in28minutes').subscribe(
      response=>{
        console.log(response)
        this.todos=response
      }
    )
  }

  deleteTodo(id){
    console.log(`Delete Todo ${id}`)
    this.todoService.deleteTodo('in28minutes',id).subscribe(
      response=>{
        console.log(response)
        this.message=`Todo having id: ${id} is successfully deleted. `
        this.refreshTodos()
      }
    )
  }

  updateTodo(id){
    console.log(`Update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

}
