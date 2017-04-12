import {Routes, RouterModule,provideRoutes,RouterConfig} from "@angular/router";
import { FirstComponent } from "./first/first.component";
import { HomeComponent } from "./home/home.component";
import {  USER_ROUTES } from './first/first.routing';
const APP_ROUTES:RouterConfig = [
{path:'first/:id',component:FirstComponent},
{path:'first/:id',component:FirstComponent,children: USER_ROUTES},
{path:'first',redirectTo:'/first/1',pathMatch:'full'},
{path:'',component:HomeComponent}
]
export const routing = RouterModule.forRoot(APP_ROUTES);
