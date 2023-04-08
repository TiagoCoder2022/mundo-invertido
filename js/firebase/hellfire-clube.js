import app from './app.js'
import {getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'

// Salvando um objeto no db
export async function subscribeToHellfireClube(subscription){
  const db = getFirestore(app)
  const hellfireClubeCollection =  collection(db, 'hellfire-clube')
  const docRef = await addDoc(hellfireClubeCollection, subscription)
  return docRef.id
}