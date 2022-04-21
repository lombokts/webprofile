import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

// Components
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AboutComponent,
    ProjectComponent,
    SpeakerComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
