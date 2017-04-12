import {Routes, RouterModule} from "@angular/router";
import { FirstaddComponent } from "./firstadd.component";
import { FirsteditComponent } from "./firstedit.component";
export const USER_ROUTES:Routes = [
{path:'edit',component:FirsteditComponent},
{path:'add',component:FirstaddComponent}
]
