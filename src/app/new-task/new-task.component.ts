import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  @ViewChild('f') taskForm: NgForm;
  constructor(private ss: SharedService, private router: Router) {}
  dataTask;
  ngOnInit(): void {
    this.recieveTask();
  }
  onSubmit() {
    console.log(this.taskForm.value);
    this.dataTask[1].push(this.taskForm.value['newTask']);
    console.log(this.dataTask);
    this.sendTask();
    this.router.navigate(['']);
  }
  sendTask() {
    this.ss.sendTask(this.dataTask[0], this.dataTask[1]);
  }
  onCancel() {
    this.taskForm.reset();
    this.router.navigate(['']);
  }
  recieveTask() {
    this.dataTask = this.ss.recieveTask();
    console.log(this.dataTask);
  }
}
