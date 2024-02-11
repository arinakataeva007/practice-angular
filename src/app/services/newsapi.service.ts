import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';import { Observable } from 'rxjs';
import { News } from '../interfaces/newsType';
import { Theme } from './themes';


@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  private newsUrl = 'https://frontappapi.dock7.66bit.ru/api/news/get?page=1&count=10';
  
  constructor(private http: HttpClient) {}

  public getNewsInfo(): Observable<News[]>{
    return this.http.get<News[]>(this.newsUrl);
  }

  public getTheme(url:string): Observable<Theme>{
    return this.http.get<Theme>(url);
  }
}
