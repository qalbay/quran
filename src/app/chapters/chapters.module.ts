import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersRoutingModule } from './chapters-routing.module';
import { ChaptersComponent } from './chapters.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ChapterDetailsComponent } from './chapter-details/chapter-details.component';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ArabicNumberPipe } from '../arabicNumber.pipe';

@NgModule({
  declarations: [
    ChaptersComponent,
    ChapterDetailsComponent,
    ArabicNumberPipe
  ],
  imports: [
    CommonModule,
    ChaptersRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule

  ]
})
export class ChaptersModule { }
