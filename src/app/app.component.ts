import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlayersPageComponent } from './players-page/players-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PlayersPageComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fut-mais';

}
const firebaseConfig = {
  apiKey: "AIzaSyAFV8jRdARdaGxsU-ET_5gQkm2Gzf75bGE",
  authDomain: "futmais-7da3f.firebaseapp.com",
  projectId: "futmais-7da3f",
  storageBucket: "futmais-7da3f.appspot.com",
  messagingSenderId: "476442590443",
  appId: "1:476442590443:web:246aa3c2bf0210723f52ae",
  measurementId: "G-S61P40S58C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
