import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewsapiService } from '../../services/newsapi.service';
import { News } from '../../interfaces/newsType';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public news: News[] = [];

  constructor(private service: NewsapiService) {}

  @ViewChild('newsbody') divel: ElementRef;

  ngOnInit(): void {
    this.service.getNewsInfo().subscribe((data: News[]) => this.news = data);
  }
}

