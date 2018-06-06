import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students : any = [
  	{id:1,name:"Juan Pablo",age:23},
  	{id:2,name:"Luis Felipe",age:26},
  	{id:3,name:"Nicolas",age:9},
  	{id:4,name:"Fernando",age:15},
  	{id:5,name:"Carlos",age:28},
  	{id:6,name:"Maria",age:18}
  ];

  student:any = {};


  validateFieldsRequired(){
  	if (this.student == {}) {
  		console.log("Campos vacios");
  	}
  }
  addStudent(){

  	//Valido los campos antes de agregar el nuevo estudiante
  	this.validateFieldsRequired();

  	// Agrego student a students
  	this.students.push(this.student);
  	this.student = {};  //Vacio nuevamente el objeto

  }

}
