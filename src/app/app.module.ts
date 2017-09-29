import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

//meus componentes
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';

//Importação do serviço de contatos
import { ContactsService } from './contacts/contacts.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ContactsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
    ])
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
