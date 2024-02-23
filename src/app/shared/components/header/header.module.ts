import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [],
  imports: [HeaderComponent,
    CommonModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
