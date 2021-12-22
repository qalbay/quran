import { Component, OnInit } from '@angular/core';
import { ChaptersService } from '../services/chapters.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit {
  chaptersList: any[] = [];
  constructor(
    public chaptersService: ChaptersService,
    public router: Router,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getChaptersList();
  }

  getChaptersList() {
    this.httpClient.get('../../assets/chapters.json').subscribe((res: any) => {
      this.chaptersList = res.chapters;
    })
  }
  showChapter(chapterId: any) {
    this.router.navigate(['/chapters/' + chapterId])
  }
}
