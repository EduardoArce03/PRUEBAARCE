import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Nota } from '../domain/nota';


@Injectable({
  providedIn: 'root'
})
export class TareaFirebaseServices {
    private path = '/tareas'

    tareaRef: AngularFirestoreCollection<any>
  
    constructor(private db: AngularFirestore) { 
      this.tareaRef = db.collection(this.path)
  
      this.tareaRef.valueChanges().subscribe(data => {
        console.log(data)
      })
    }
  
    getAll(){
      return this.tareaRef.valueChanges()
    }
  
    save(nota: Nota){
      const uid = this.db.createId()
      nota.uid = uid
      console.log('persona', nota)
      return this.tareaRef.doc(uid).set(Object.assign({}, nota))
    }
  
    getTarea(uid: string){
      console.log('uid', uid)
      return this.db.doc(this.path+'/'+uid).valueChanges()
    }

}
