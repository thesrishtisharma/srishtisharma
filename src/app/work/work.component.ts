import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  viewProjectBtn: string = "View Project";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  viewProject(link: string){
    this.router.navigate([link]);
  }

}
