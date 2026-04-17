import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Meta } from '../models/meta.model';

@Injectable({
  providedIn: 'root'
})

export class MetaServiceService {
  private dbPath = '/metas';
  metasRef: AngularFirestoreCollection<Meta>;

  constructor(private db: AngularFirestore) {
    this.metasRef = db.collection(this.dbPath); //Referencia
  }

  // Read
  getMetas(): AngularFirestoreCollection<Meta> {
    return this.metasRef;
  }

  // Write
  addMeta(nuevaMeta: Meta): any {
    return this.metasRef.add({ ...nuevaMeta });
  }

  // Delete
  deleteMeta(id: string): Promise<void> {
    return this.metasRef.doc(id).delete();
  }
}
