import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { getDatabase, ref, onValue, child, get } from 'firebase/database';
import { Times } from '../../models/times.dto';
import { collection, addDoc, getFirestore, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TimesService {
  private dbRef = ref(getDatabase());

  constructor(private firestore: Firestore) {}

  async addTime(time: Times) {
    const db = getFirestore();
    const docRef = await addDoc(collection(db, 'time'), time);
    console.log('Document written with ID: ', docRef.id);
  }

  async getTime() {
    const db = getFirestore();
    const timesCol = collection(db, 'time');
    const timesSnapshot = await getDocs(timesCol);
    const timesList = timesSnapshot.docs.map((doc) => doc.data());
    return timesList;
  }
}
