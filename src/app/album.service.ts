import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album} from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  API_URL = 'http://jsonplaceholder.typicode.com/posts?fbclid=IwAR2jN3D6dy3jkf9w48i86EdQCRVUh7ejP9tXCMN5A1By7ApKtGsLfX-KIJA';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Album[]> {
    return this.http.get<Album[]>(this.API_URL);
  }

  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.API_URL, album);
  }

  deleteAlbum(id: number): Observable<Album> {
    return this.http.delete<Album>(`http://jsonplaceholder.typicode.com/photos/${id}`);
  }
}
