import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forfait } from './forfait';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { formatDate } from '@angular/common';
import { Recherche } from './recherche';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

@Injectable({
  providedIn: 'root'
})
export class ForfaitsService {

  API_URL = 'http://localhost/api-forfaits/api-forfait.php';
 
  constructor(private http: HttpClient) { }
  
  getForfaits(): Observable<Forfait[]> {
      return this.http.get<Forfait[]>(this.API_URL); 
  }

  addForfait(forfait: Forfait): Observable<void> {
    
    console.log(formatDate(forfait.dateDebut, 'YYYY-MM-dd', 'fr-CA'))
    forfait.dateDebut = formatDate(forfait.dateDebut, 'YYYY-MM-dd', 'fr-CA');
    console.log(formatDate(forfait.dateFin, 'YYYY-MM-dd', 'fr-CA'));
    forfait.dateFin = formatDate(forfait.dateFin, 'YYYY-MM-dd', 'fr-CA');

    return this.http.post<void>(this.API_URL, forfait, httpOptions)
  }

  updateForfait(forfait: Forfait): Observable<void> {
    console.log(formatDate(forfait.dateDebut, 'YYYY-MM-dd', 'fr-CA'))
    forfait.dateDebut = formatDate(forfait.dateDebut, 'YYYY-MM-dd', 'fr-CA');
    console.log(formatDate(forfait.dateFin, 'YYYY-MM-dd', 'fr-CA'));
    forfait.dateFin = formatDate(forfait.dateFin, 'YYYY-MM-dd', 'fr-CA');

    // return this.http.put<void>(`${this.API_URL}/${forfait.id}`, forfait, httpOptions);
    return this.http.put<void>(`${this.API_URL}?id=${forfait.id}}`, forfait, httpOptions);
    }

    // deleteForfait(id: number): Observable<void> {
    //   confirm("Êtes-vous sûr de vouloir supprimer ce forfait?")
    //   return this.http.delete<void>(`${this.API_URL}?id=${id}`);
    //   }

  deleteForfait(id: number): Observable<void> {
    if(confirm("Êtes-vous sûr de vouloir supprimer ce forfait ?")){
      return this.http.delete<any>(`${this.API_URL}?id=${id}`).pipe(
        catchError(err => {
          console.log('Une erreur est survenue lors de la suppression du forfait:', err);
          return throwError('Une est survenue lors de la supression du forfait. Veuillez réessayer plus tard.');
        })
      );
    } else return of(null).pipe(map(() =>{}))
    
  }





  
 
}