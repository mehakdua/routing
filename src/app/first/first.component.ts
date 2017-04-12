import { Component, OnInit } from '@angular/core';
import {Router, RouterModule,ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent {
private subscription ;
id:String;
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { 
  	console.log(activatedRoute.params);
	activatedRoute.params.subscribe((param:any) => this.id = param['id']);

  }

  ngOnInit() {
  }
  navigateToHome(){
  	this.router.navigate(['/'],{queryParams:{'analytics':100}});

  }

}
