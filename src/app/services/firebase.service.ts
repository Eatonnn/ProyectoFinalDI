import { Injectable, inject } from '@angular/core';
import { Database, ref, set, get, child, update, remove } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { onValue } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private db: Database = inject(Database); // Inyección de Database

  constructor() {}

  // Obtener todos los datos de una colección
  getCollectionData(collectionPath: string): Observable<any[]> {
    return new Observable(observer => {
      const dataRef = ref(this.db, collectionPath);
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Verificar que cada "value" sea un objeto antes de hacer spread
          const formattedData = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...(typeof value === 'object' && value !== null ? value : { value }) // Asegurar que sea un objeto
          }));
          observer.next(formattedData);
        } else {
          observer.next([]); // Si no hay datos, devolver un array vacío
        }
      }, (error) => {
        observer.error(error);
      });
    });
  }

  // Obtener un solo documento por su ID
  async getDocumentById(collectionPath: string, id: string) {
    const snapshot = await get(child(ref(this.db), `${collectionPath}/${id}`));
    return snapshot.exists() ? snapshot.val() : null;
  }

  // Agregar o actualizar un documento
  async addOrUpdateDocument(collectionPath: string, id: string, data: any) {
    return await set(ref(this.db, `${collectionPath}/${id}`), data);
  }

  // Actualizar parcialmente un documento
  async updateDocument(collectionPath: string, id: string, data: any) {
    return await update(ref(this.db, `${collectionPath}/${id}`), data);
  }

  // Eliminar un documento
  async deleteDocument(collectionPath: string, id: string) {
    return await remove(ref(this.db, `${collectionPath}/${id}`));
  }
}
