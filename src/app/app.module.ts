import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ZoobargrillComponent } from './zoobargrill/zoobargrill.component';
import { FunctionEventComponent } from './function-event/function-event.component';
import { NightclubComponent } from './nightclub/nightclub.component';
import { MenuComponent } from './menu/menu.component';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DrinkComponent } from './drink/drink.component';
import { HustlerComponent } from './hustler/hustler.component';
import { CorporateComponent } from './corporate/corporate.component';
import {FormsModule} from '@angular/forms';
import { SendDataService } from './send-data.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ModalModule } from 'ngx-bootstrap/modal';


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
    HustlerComponent,
    CorporateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    PdfViewerModule,

  ],
  providers: [SendDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
