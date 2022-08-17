import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { List } from '../list';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'],
})
export class NewListComponent implements OnInit {
  @ViewChild('f') listForm: NgForm | undefined;

  constructor(private ss: SharedService, private router: Router) {}
  // list: List | undefined
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.listForm?.value['listName']);

    this.router.navigate(['/']);

    var list: List|undefined = {
      id: Math.floor(Math.random() * 9000000000 + 1000000000),
      name: this.listForm?.value['listName'],
      tasks: [],
    };
    // this.lists.push(list);
    this.ss.sendLists(list);
    this.listForm.reset();
  }
  onCancel(){
    this.listForm.reset();
    this.router.navigate(['/']);
    
  }
}
