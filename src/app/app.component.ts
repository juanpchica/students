import { Component } from '@angular/core';
import { Students } from './class/students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students = Students;
  student:any = {};
  todo : boolean = true;
  addStudent(){
  	// Agrego student a students
  	this.students.push(this.student);
  	this.student = {};  //Vacio nuevamente el objeto
  }

  editStudent(Itemstudent){
  	console.log("Editando...");
  	this.student = Itemstudent;
  	this.todo = false;
  }

  deleteStudent(index:number){
  	console.log(index);
  	this.students.splice(index,1);
  }

}
