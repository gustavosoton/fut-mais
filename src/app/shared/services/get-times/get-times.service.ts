import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { getDatabase, ref, onValue, child, get } from 'firebase/database';
import { Times } from '../../models/times.dto';

@Injectable({
  providedIn: 'root',
})
export class TimesService {
  private dbRef = ref(getDatabase());

  constructor(private firestore: Firestore) {}

  getTimes(): Promise<Times[]> {
    return new Promise((resolve, reject) => {
      get(child(this.dbRef, 'time'))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const times: Times[] = [];
            for (const time in snapshot.val()) {
              times.push({
                nomeTime: this.capitalize(time),
                brasao: snapshot.val()[time].brasao,
                jogadores: snapshot.val()[time].jogadores,
              });
            }
            resolve(times);
          } else {
            reject('No data available');
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
