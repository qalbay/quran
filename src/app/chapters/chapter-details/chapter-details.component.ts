import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChaptersService } from 'src/app/services/chapters.service';
// import { ArabicNumberPipe } from 'src/app/arabicNumber.pipe';

@Component({
  selector: 'app-chapter-details',
  templateUrl: './chapter-details.component.html',
  styleUrls: ['./chapter-details.component.scss']
})
export class ChapterDetailsComponent implements OnInit {
  chapter_number: number = 0;
  verses: any[] = [];
  versesFromJson: any[] = [];
  selectedVerse: any;
  verseNumber: any[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public chaptersService: ChaptersService,
    public httpClient: HttpClient,
    // public arabicNumberPipe: ArabicNumberPipe
  ) { }

  ngOnInit(): void {
    this.chapter_number = this.activatedRoute.snapshot.params.id;
    this.getVersesFromJson(this.chapter_number);
  }

  getVersesFromJson(chapter: any) {
    this.httpClient.get('../../assets/quran.json').subscribe((res: any) => {
      console.log(res[this.chapter_number]);
      this.versesFromJson = res[chapter]
      this.verseNumber = res[this.chapter_number]
    })
  }

  selectedAyat(event: any) {
    this.selectedVerse = event;
    console.log(this.selectedVerse)

  }
  // getVersesByChapter() {
  //   this.chaptersService.getVerse(this.chapter_number).subscribe((res: any) => {
  //     console.log(res)
  //     this.verses = res.verses;
  //   })
  // }

  nextSurah() {
    const updatedChapterNumber = this.chapter_number++;
    this.router.navigate(['/chapters/' + updatedChapterNumber])
    this.getVersesFromJson(updatedChapterNumber)
  }

  previousSurah() {
    const updatedChapterNumber = this.chapter_number--;
    this.router.navigate(['/chapters/' + updatedChapterNumber])
    this.getVersesFromJson(updatedChapterNumber)
  }

  search(event: any) {
    this.verseNumber = this.versesFromJson.filter(vn => vn.verse == event.key)
  }
}
