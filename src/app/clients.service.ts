import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  APIClient_URL = 'http://localhost/api-forfaits/api-client.php';



  constructor( private http: HttpClient ) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.APIClient_URL); 
}

getClientsParVille(): Observable<{ [ville: string]: number }> {
  return this.http.get<Client[]>(this.APIClient_URL).pipe(
    map(clients => {
      const nombreClientsParVille: { [key: string]: number } = {};
      clients.forEach(client => {
        if (nombreClientsParVille[client.ville_client]) {
          nombreClientsParVille[client.ville_client]++;
        } else {
          nombreClientsParVille[client.ville_client] = 1;
        }
      });
      return nombreClientsParVille;
    })
  );
}


}
