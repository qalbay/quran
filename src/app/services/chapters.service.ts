import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {

  constructor(private http: HttpClient, private router: Router) { }


  getAllChapters() {
    return this.http.get('http://api.quran.com/api/v3/chapters');
  }

  getVerse(chapter_number: any) {
    return this.http.get('https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=' + chapter_number);
  }

  getVersee() {
    return this.http.get('../quran.json');
  }
}
