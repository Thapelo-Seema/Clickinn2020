import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 3000,
    autoplay: true
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  interested(){
  	this.router.navigate(['/sign-up']);
  }

}
