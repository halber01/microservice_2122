import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {StoreTasksComponent} from "./components/store-tasks/store-tasks.component";
import {AddPaletteComponent} from "./components/add-palette/add-palette.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'store-tasks', component: StoreTasksComponent},
  {path: 'store-tasks/add-palette', component: AddPaletteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
