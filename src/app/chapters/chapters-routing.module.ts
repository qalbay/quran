import { NgModule } from '@angular/core';
import { ChaptersComponent } from './chapters.component';
import { RouterModule, Routes } from '@angular/router';
import { ChapterDetailsComponent } from './chapter-details/chapter-details.component';

const routes: Routes = [
  {
    path: '',
    component: ChaptersComponent
  },
  // {
  //   path: "verses",
  //   component: ChapterDetailsComponent,
  // },
  {
    path: ":id",
    component: ChapterDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChaptersRoutingModule { }
