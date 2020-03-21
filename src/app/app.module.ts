import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { ZoobargrillComponent } from './zoobargrill/zoobargrill.component';
import { FunctionEventComponent } from './function-event/function-event.component';
import { NightclubComponent } from './nightclub/nightclub.component';

=======
import { FunctionEventComponent } from './function-event/function-event.component';
>>>>>>> d4e305f7f69eb3c3546e71acaff7e34a225e2a7d
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
<<<<<<< HEAD
    ZoobargrillComponent,
    FunctionEventComponent,
    NightclubComponent
=======
    FunctionEventComponent
>>>>>>> d4e305f7f69eb3c3546e71acaff7e34a225e2a7d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
