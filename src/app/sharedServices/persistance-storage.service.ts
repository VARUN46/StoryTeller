import { Injectable } from '@angular/core';
import { StorageData } from '../entities/storageData';

@Injectable({
  providedIn: 'root'
})
export class PersistanceStorageService {

  private key: string;
  constructor() {
    this.key = 'DataSet';
   }

  replaceInStorage(data: StorageData) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(this.key, jsonData);
  }

  getDataFromStorage(): StorageData {
    const stringJSON = localStorage.getItem(this.key);
    if (typeof(stringJSON) === 'undefined' || stringJSON === null) {
      return new StorageData();
    }
    return JSON.parse(stringJSON);
  }
}
