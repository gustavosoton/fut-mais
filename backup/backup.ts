// await this.timesService.getTimes().then((times) => {
//   this.times = times;
//   for (let i = 0; i < times.length; i++) {}
// });
// this.timesService.addTime({
//   nomeTime: 'flamengo',
//   brasao: 'flamengo',
//   jogadores: [
//     {
//       nome: 'Gabigol',
//       idade: 24,
//       nacionalidade: 'Brasileiro',
//       posicao: 'Atacante',
//       pontuacao: 100,
//     },
//     {
//       nome: 'Everton Ribeiro',
//       idade: 32,
//       nacionalidade: 'Brasileiro',
//       posicao: 'Meia',
//       pontuacao: 100,
//     },
//     {
//       nome: 'Diego',
//       idade: 36,
//       nacionalidade: 'Brasileiro',
//       posicao: 'Meia',
//       pontuacao: 100,
//     },
//     {
//       nome: 'Diego Alves',
//       idade: 36,
//       nacionalidade: 'Brasileiro',
//       posicao: 'Goleiro',
//       pontuacao: 100,
//     },
//     {
//       nome: 'Filipe Luís',
//       idade: 36,
//       nacionalidade: 'Brasileiro',
//       posicao: 'Lateral',
//       pontuacao: 100,
//     },
//   ],
// });

// getTimes(): Promise<Times[]> {
//   return new Promise((resolve, reject) => {
//     get(child(this.dbRef, 'time'))
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           const times: Times[] = [];
//           for (const time in snapshot.val()) {
//             times.push({
//               nomeTime: this.capitalize(time),
//               brasao: snapshot.val()[time].brasao,
//               jogadores: snapshot.val()[time].jogadores,
//             });
//           }
//           resolve(times);
//         } else {
//           reject('No data available');
//         }
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }
