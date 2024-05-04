import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { IViacepResponse } from '../interfaces/IViacepResponse';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {
  #http = inject(HttpClient)
  #url = signal('https://viacep.com.br/ws');

  public getCep(cep:string): Observable<IViacepResponse> {
    return this.#http.get<IViacepResponse>(`${this.#url()}/${cep}/json`);
  }

}
