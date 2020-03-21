import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import {ZoobargrillComponent} from './zoobargrill/zoobargrill.component';
import {NightclubComponent} from './nightclub/nightclub.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'zoobargrill', component: ZoobargrillComponent},
  {path: 'nightclub', component: NightclubComponent},
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
