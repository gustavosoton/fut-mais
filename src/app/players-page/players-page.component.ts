import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sort, MatSortModule } from '@angular/material/sort';
import { AsyncPipe } from '@angular/common';
import { Firestore } from '@angular/fire/firestore';
import { getDatabase, ref, onValue, child, get } from 'firebase/database';
import { Times } from '../shared/models/times.dto';
import { TimesService } from '../shared/services/get-times/get-times.service';

@Component({
  selector: 'app-players-page',
  standalone: true,
  imports: [CommonModule, MatSortModule, AsyncPipe],
  templateUrl: './players-page.component.html',
  styleUrl: './players-page.component.scss',
})
export class PlayersPageComponent implements OnInit {
  firestore = inject(Firestore);
  times: Times[] = [];
  dbRef = ref(getDatabase());

  constructor(private timesService: TimesService) {}

  async ngOnInit() {
    await this.timesService.getTimes().then((times) => {});
  }

  sortData(sort: Sort) {
    // if (!sort.active || sort.direction === '') {
    //   this.sortedData = this.times.slice();
    //   return;
    // }
    // const isAsc = sort.direction === 'asc';
    // switch (sort.active) {
    //   case 'nomeTime':
    //   case 'posicao':
    //   case 'clube':
    //   case 'nacionalidade':
    //     return (this.sortedData = this.times
    //       .slice()
    //       .sort((a, b) => a.nomeTime.localeCompare(b.nomeTime)));
    //   case 'idade':
    //   // case 'pontuacao':
    //   //   return this.compare(
    //   //     Number(a[sort.active]),
    //   //     Number(b[sort.active]),
    //   //     isAsc
    //   //   );
    //   default:
    //     return 0;
    // }
  }
}
