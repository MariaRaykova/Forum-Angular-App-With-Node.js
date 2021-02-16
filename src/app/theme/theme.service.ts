import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ITheme } from '../shared/interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IPost } from '../shared/interfaces/post';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }
  
  loadThemeList(): Observable<ITheme<IPost>[]> { 
    return this.http.get<ITheme<IPost>[]>(`/themes`)
  }
  loadTheme(id: string): Observable<ITheme<IPost>> {
    return this.http.get<ITheme<IPost>>(`/themes/${id}`)
  }
  saveTheme(data: any): Observable<ITheme<any>>{
    return this.http.post<ITheme<any>>(`/themes/`, data)
  }
}
