import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ZoobargrillComponent } from './zoobargrill/zoobargrill.component';
import { FunctionEventComponent } from './function-event/function-event.component';
import { NightclubComponent } from './nightclub/nightclub.component';
import { MenuComponent } from './menu/menu.component';
import { DrinkComponent } from './drink/drink.component';
import { HustlerComponent } from './hustler/hustler.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ZoobargrillComponent,
    FunctionEventComponent,
    NightclubComponent,
    MenuComponent,
    DrinkComponent,
    HustlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
