import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sort, MatSortModule } from '@angular/material/sort';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe } from '@angular/common';
import { Firestore } from '@angular/fire/firestore';
import { Times } from '../../shared/models/times.dto';
import { getDatabase, ref, onValue, child, get } from 'firebase/database';

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

  ngOnInit() {
    this.getTimes();
  }

  getTimes() {
    get(child(this.dbRef, 'time'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          for (const time in snapshot.val()) {
            this.times.push({
              nomeTime: this.capitalize(time),
              brasao: snapshot.val()[time].brasao,
              jogadores: snapshot.val()[time].jogadores,
            });
          }
          console.log(this.times);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // sortData(sort: Sort) {
  //   if (!sort.active || sort.direction === '') {
  //     this.sortedData = this.players.slice();
  //     return;
  //   }

  //   this.sortedData = this.players.slice().sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'nome':
  //       case 'posicao':
  //       case 'clube':
  //       case 'nacionalidade':
  //         return this.compare(a[sort.active], b[sort.active], isAsc);
  //       case 'idade':
  //       case 'pontuacao':
  //         return this.compare(
  //           Number(a[sort.active]),
  //           Number(b[sort.active]),
  //           isAsc
  //         );
  //       default:
  //         return 0;
  //     }
  //   });
  // }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
