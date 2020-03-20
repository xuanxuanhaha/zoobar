import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {FormsModule} from '@angular/forms';
import {ZoobargrillComponent} from './zoobargrill/zoobargrill.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'zoobargrill', component: ZoobargrillComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
