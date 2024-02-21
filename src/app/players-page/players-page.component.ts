import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sort, MatSortModule } from '@angular/material/sort';
import { Players } from '../../shared/models/player.dto';
import { getDatabase, ref, onValue, get, child } from 'firebase/database';

@Component({
  selector: 'app-players-page',
  standalone: true,
  templateUrl: './players-page.component.html',
  styleUrl: './players-page.component.scss',
  imports: [CommonModule, MatSortModule],
})
export class PlayersPageComponent implements OnInit {
  sortedData: Players[] = [];
  players: Players[] = [];

  ngOnInit(): void {
    this.fetchPlayers();
    const dbRef = ref(getDatabase());

    getImageURL(
      'https://firebasestorage.googleapis.com/v0/b/futmais-7da3f.appspot.com/o/Goalkeppers%2FGK-%20Alisson%20Becker.jpg?alt=media&token=f8baba47-cc5f-4178-a2e2-1129ad5db51d'
    );

    get(child(dbRef, `users/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async fetchPlayers() {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    for (let i = 0; i < 10; i++) {
      if (data.results[i]) {
        this.players.push({
          nome: data.results[i].name.first,
          posicao: 'Atacante',
          clube: 'Barcelona FC',
          idade: data.results[i].dob.age,
          nacionalidade: data.results[i].location.country,
          pontuacao: Math.floor(Math.random() * 100),
          img: data.results[i].picture.thumbnail,
        });
      }
    }
    this.sortedData = this.players.slice();
  }

  constructor() {}

  sortData(sort: Sort) {
    if (!sort.active || sort.direction === '') {
      this.sortedData = this.players.slice();
      return;
    }

    this.sortedData = this.players.slice().sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nome':
        case 'posicao':
        case 'clube':
        case 'nacionalidade':
          return this.compare(a[sort.active], b[sort.active], isAsc);
        case 'idade':
        case 'pontuacao':
          return this.compare(
            Number(a[sort.active]),
            Number(b[sort.active]),
            isAsc
          );
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
function getImageURL(p0: string) {
  throw new Error('Function not implemented.');
}
