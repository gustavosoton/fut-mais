import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe } from '@angular/common';
import { DocumentData, Firestore } from '@angular/fire/firestore';
import { getDatabase, ref } from 'firebase/database';
import { Times } from '../../shared/models/times.dto';
import { TimesService } from '../../shared/services/get-times/get-times.service';
import { MatButton } from '@angular/material/button';
import { CapitalizePipe } from '../../shared/pipes/capitalize/capitalize.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatList, MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-players-page',
  standalone: true,
  templateUrl: './players-page.component.html',
  styleUrl: './players-page.component.scss',
  imports: [
    CommonModule,
    MatCardModule,
    AsyncPipe,
    MatButton,
    CapitalizePipe,
    MatPaginatorModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
  ],
})
export class PlayersPageComponent implements OnInit {
  firestore = inject(Firestore);
  times: Times[] = [];
  dbRef = ref(getDatabase());
  nomeJogadores: string[] = [];

  constructor(private timesService: TimesService) {}

  async ngOnInit() {
    this.timesService.getTime().then((times: DocumentData[]) => {
      this.times = times as Times[];
    });
  }
  addTime() {
    this.timesService.addTime({
      nomeTime: 'flamengo',
      brasao: '',
      jogadores: [
        {
          nome: 'Gabigol',
          idade: 24,
          nacionalidade: 'Brasileiro',
          posicao: 'Atacante',
          pontuacao: 100,
          foto: '',
        },
        {
          nome: 'Diego',
          idade: 35,
          nacionalidade: 'Brasileiro',
          posicao: 'Meio Campo',
          pontuacao: 90,
          foto: '',
        },
      ],
    });
  }
}
