import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { NewListComponent } from './new-list/new-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path:'', component:ListsComponent, children:[
    {path:'tasks/:id',component:TasksComponent}
  ]},
  {path:'newlist',component:NewListComponent},
  {path:'newtask/:id', component:NewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
