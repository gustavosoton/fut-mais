import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe } from '@angular/common';
import { DocumentData, Firestore } from '@angular/fire/firestore';
import { getDatabase, ref } from 'firebase/database';
import { Times } from '../../shared/models/times.dto';
import { TimesService } from '../../shared/services/get-times/get-times.service';

@Component({
  selector: 'app-players-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, AsyncPipe],
  templateUrl: './players-page.component.html',
  styleUrl: './players-page.component.scss',
})
export class PlayersPageComponent implements OnInit {
  firestore = inject(Firestore);
  times: Times[] = [];
  dbRef = ref(getDatabase());

  constructor(private timesService: TimesService) {}

  async ngOnInit() {
    this.timesService.getTime().then((times: DocumentData[]) => {
      this.times = times as Times[];
      for (let i = 0; i < times.length; i++) {
        console.log(this.times[i]);
      }
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
        },
        {
          nome: 'Everton Ribeiro',
          idade: 32,
          nacionalidade: 'Brasileiro',
          posicao: 'Meia',
          pontuacao: 100,
        },
        {
          nome: 'Diego',
          idade: 36,
          nacionalidade: 'Brasileiro',
          posicao: 'Meia',
          pontuacao: 100,
        },
        {
          nome: 'Diego Alves',
          idade: 36,
          nacionalidade: 'Brasileiro',
          posicao: 'Goleiro',
          pontuacao: 100,
        },
        {
          nome: 'Filipe Luís',
          idade: 36,
          nacionalidade: 'Brasileiro',
          posicao: 'Lateral',
          pontuacao: 100,
        },
      ],
    });
  }
}
