import { Component, OnDestroy, OnInit } from '@angular/core';
import { List } from '../list';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit,OnDestroy {
tasks:any;
interval;
strike=false;
  constructor(private ss:SharedService) { }
 
  ngOnInit(): void {
   this.interval= window.setInterval(()=>{
      this.recievetasks();

    },1000)
  }
  recievetasks(){
    this.tasks=this.ss.recieveTask()[1]
   
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
