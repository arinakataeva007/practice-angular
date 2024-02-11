import { Component, EventEmitter, Output } from '@angular/core';
import { NewsapiService } from '../../services/newsapi.service';
import { Theme } from '../../services/themes';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private service: NewsapiService){}

  private darkUrl = 'https://frontappapi.dock7.66bit.ru/api/theme/get?name=dark';
  private lightUrl = 'https://frontappapi.dock7.66bit.ru/api/theme/get?name=light';
  private blueUrl = 'https://frontappapi.dock7.66bit.ru/api/theme/get?name=blue';
  
public changeTheme(themeName: string): void {
  const compBody = document.querySelector('body');
  if(compBody){
    switch(themeName){
      case 'dark':
        this.service.getTheme(this.darkUrl).subscribe((data: Theme)=> compBody.style.backgroundColor = data.mainColor);
        break;
      case 'light':
        this.service.getTheme(this.lightUrl).subscribe((data: Theme)=> compBody.style.backgroundColor = data.mainColor);
        break;
      case 'blue':
        this.service.getTheme(this.blueUrl).subscribe((data: Theme)=> compBody.style.backgroundColor = data.mainColor);
        break;
    }
  }
}
}
