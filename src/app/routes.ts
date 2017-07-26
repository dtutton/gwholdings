import { Routes } from '@angular/router'
import { WebsiteComponent } from './website/website.component'
import { BootswatchComponent } from './bootswatch/bootswatch.component'


export const appRoutes: Routes = [
    { path: 'website', component: WebsiteComponent },
    { path: 'bootswatch', component: BootswatchComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
]
