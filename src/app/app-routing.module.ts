import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'mainpage', loadChildren: () => import('./components/mainpage/mainpage.module').then(m =>  m.MainpageModule)},
{path:'',redirectTo:'mainpage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
