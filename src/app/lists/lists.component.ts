import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  localItem: string;
  lists: List[] | any = [];
  tasklist: any;

  constructor(private ss: SharedService) {}

  ngOnInit(): void {
    this.localItem = localStorage.getItem('lists');
    // console.log('localItem', this.localItem);

    if (
      this.localItem === null ||
      this.localItem === undefined ||
      this.localItem === '[null]' ||
      this.localItem === '[undefined]'
    ) {
      this.lists = [];
    } else {
      this.lists = JSON.parse(this.localItem);
    }

    this.getList();
    if (
      this.lists !== [undefined] ||
      this.lists !== null ||
      this.lists !== undefined ||
      this.lists !== [null]
    ) {
      this.saveList();
    }
    // localStorage.removeItem('lists');
    this.recieveTask();
    this.addTask();
  }

  saveList() {
    if (
      this.lists[this.lists.length - 1] == null ||
      this.lists.length - 1 == undefined
    ) {
      this.lists.pop();
    } else {
      console.log('not null');
    }
    if(this.lists.length>1){
      if (
        this.lists[this.lists.length - 1]['id'] ==
        this.lists[this.lists.length - 2]['id']
      ) {
        this.lists.pop();
      } else {
        console.log('not same');
      }
    }
    
    // console.log('last list', this.lists[this.lists.length - 1]);

    localStorage.removeItem('lists');
    localStorage.setItem('lists', JSON.stringify(this.lists));
    console.log(localStorage['lists']);
  }
  getList() {
    if (
      this.ss.recieveList() !== undefined ||
      this.ss.recieveList() !== null ||
      this.ss.recieveList() !== [null] ||
      this.ss.recieveList() !== [undefined]
    ) {
      this.lists?.push(this.ss.recieveList());
    } else {
      this.lists = [];
    }
    // console.log(this.lists);
  }
  sendTask(id, tasks) {
    this.ss.sendTask(id, tasks);
  }
  recieveTask() {
    console.log(this.ss.recieveTask());
  }
  addTask() {
    let newList = this.lists.find((o, i) => {
      if (o.id == this.ss.recieveTask()[0]) {
        this.lists[i]['tasks'] = this.ss.recieveTask()[1];
        this.saveList();
      } else {
        console.log('id not matched');
      }
    });
  }
  setTaskList(list:List){
    this.tasklist = list;
    console.log('task list', this.tasklist);
    
  }
}
