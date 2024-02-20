import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sort, MatSortModule } from '@angular/material/sort';
import { Players } from '../../shared/models/player.dto';

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

    fetch('https://api.api-futebol.com.br/v1/campeonatos/2', {
      headers: {
        Authorization: 'test_49bd49e7427f4e9e4811e262f5083e',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Erro:', error));
  }

  async fetchPlayers() {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    for (let i = 0; i < 10; i++) {
      if (data.results[i]) {
        console.log(data.results[i]);
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
    const data = this.players.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nome':
          return this.compare(a.nome, b.nome, isAsc);
        case 'posicao':
          return this.compare(a.posicao, b.posicao, isAsc);
        case 'clube':
          return this.compare(a.clube, b.clube, isAsc);
        case 'idade':
          return this.compare(a.idade, b.idade, isAsc);
        case 'nacionalidade':
          return this.compare(a.nacionalidade, b.nacionalidade, isAsc);
        case 'pontuacao':
          return this.compare(a.pontuacao, b.pontuacao, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
