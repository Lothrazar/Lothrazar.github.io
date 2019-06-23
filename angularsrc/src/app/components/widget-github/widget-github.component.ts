import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-widget-github',
  templateUrl: './widget-github.component.html',
  styleUrls: ['./widget-github.component.css']
})
export class WidgetGithubComponent implements OnInit {
  @Input() private mod: IModPage;
  issues = null;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  getIssues() {
    console.log('get'); 
    this.http.get('https://api.github.com/repos/lothrazar/' + this.mod.githubId + '/issues?page=0&per_page=100')
    .subscribe((data) => this.onLoadIssues(data), (error) => this.onFailIssues(error));
  }

  onFailIssues(data) {
    alert('rate limited');
  }
  onLoadIssues(data) {
    console.log(data);
    if(data) {
      this.issues = data;
    }
  }

}
