import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"about-me", component:AboutMeComponent},
    {path:"projects", component:ProjectsComponent},
    {path:"contact-me", component:ContactMeComponent}
];
