import { Injectable } from '@angular/core';
import { List } from './list';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
list:any
id:number;
tasks:string[];
  constructor() { }
  sendLists(lists:List){
    this.list=lists;
  
    
  }
  recieveList(){
    // console.log('recieved');
   
    
    return this.list;
  }
  sendTask(id,tasks){
   this.id=id;
   this.tasks=tasks
  }
  recieveTask(){
    return [this.id, this.tasks]
  }
}
