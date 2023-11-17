import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HeaderComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AppModule { }
