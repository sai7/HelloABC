import { Component, OnInit } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from "@ionic-native/admob-free";

export interface ContentImages {
  front: string,
  back: string
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  @ViewChild(Slides) slides: Slides;

  background;
  frontImg; backImg;

  contents: ContentImages[] = [
    // { front: this.frontImg, back: this.backImg },
    // { front: this.frontImg, back: this.backImg },
    // { front: this.frontImg, back: this.backImg },
    // { front: this.frontImg, back: this.backImg },
    // { front: this.frontImg, back: this.backImg },

  ];

  ngOnInit(): void {
    this.background = '../assets/imgs/habc_bg.png';
    this.frontImg = '../assets/imgs/habc_letters.png';
    this.backImg = '../assets/imgs/habc_back.png';


    var obj = { front: this.frontImg, back: this.backImg };

    this.contents.push(obj);
    this.contents.push(obj);
    this.contents.push(obj);
    this.contents.push(obj);
    this.contents.push(obj);
    this.contents.push(obj);
    this.contents.push(obj);


  }

  constructor(public navCtrl: NavController, private admobFree: AdMobFree) {
    // this.showBannerAd();
  }
  async showBannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: true,
      autoShow: true,
      id: 'ca-app-pub-3385846881264048~3680013224'
    }
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.prepare().then(() => {
      // bannerConfig.autoShow = true;
      // bannerConfig.bannerAtTop = false;
      alert('showing banner ad!');
    }).catch(e => console.log(e));
  }


  slideChanged = function() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is: ', this.contents[currentIndex]);
  }


}
