import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  API_KEY = '859e9ad4e23d42f2828bced8f91b3169';

  constructor(private http: HttpClient) {}

  getNewsHeadlines() {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${this.API_KEY}`
    );
  }
}
