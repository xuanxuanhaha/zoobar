import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import {ZoobargrillComponent} from './zoobargrill/zoobargrill.component';
import {MenuComponent} from './menu/menu.component';
import {NightclubComponent} from './nightclub/nightclub.component';
import {DrinkComponent} from './drink/drink.component';
import {HustlerComponent} from './hustler/hustler.component';
import {CorporateComponent} from './corporate/corporate.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'zoobargrill', component: ZoobargrillComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'nightclub', component: NightclubComponent},
  {path: 'drink', component: DrinkComponent},
  {path: 'hustler', component: HustlerComponent},
  {path: 'corporate', component: CorporateComponent}
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
