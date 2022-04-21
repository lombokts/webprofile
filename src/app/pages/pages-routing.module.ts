import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { ProjectComponent } from './project/project.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'speaker', component: SpeakerComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
