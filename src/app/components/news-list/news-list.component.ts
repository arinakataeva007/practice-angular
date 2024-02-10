import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewsapiService } from '../../services/newsapi.service';
import { News } from '../../interfaces/newsType';
import { Theme } from '../../services/themes';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public news: News[] = [];
  private darkUrl = 'https://frontappapi.dock7.66bit.ru/api/theme/get?name=dark';
  private lightUrl = 'https://frontappapi.dock7.66bit.ru/api/theme/get?name=light';
  private blueUrl = 'https://frontappapi.dock7.66bit.ru/api/theme/get?name=blue';
  private divel1: HTMLElement;
  
  constructor(private service: NewsapiService) {}

  @ViewChild('newsbody') divel: ElementRef;

  ngOnInit(): void {
    this.service.getNewsInfo().subscribe((data: News[]) => this.news = data);
    console.log(this.divel.nativeElement);
  }

  sendy(themeName: string): void {
    if (themeName === 'dark') {
      this.service.getTheme(this.darkUrl).subscribe((data: Theme) => {
        this.divel.nativeElement.style.backgroundColor = data.mainColor;
      });
    }

    if(themeName === 'light'){
      this.service.getTheme(this.lightUrl).subscribe((data: Theme) => {
        this.divel.nativeElement.style.backgroundColor = data.mainColor;
      });
    }

    if(themeName === 'blue'){
      this.service.getTheme(this.blueUrl).subscribe((data: Theme) => {
        this.divel.nativeElement.style.backgroundColor = data.mainColor;
      });
    }
  }
}

