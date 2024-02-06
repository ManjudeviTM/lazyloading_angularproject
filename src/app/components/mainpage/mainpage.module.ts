import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage.component';

const routes: Routes = [

  {path: '', component:MainpageComponent},



];



@NgModule({
  declarations: [
    MainpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MainpageModule { }
