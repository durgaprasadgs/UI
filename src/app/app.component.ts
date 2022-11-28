import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'enukesoftware';
  newArray :any[] =[];
  result : any[] =[];

  apiListData:any;
  constructor(public http:HttpClient){
    this.getApiList()

  }
  getApiList() {
  
    this.http.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo").subscribe((data) => {
      this.apiListData = data;
      this.newArray=this.apiListData['Time Series (5min)'];

    });
  }

}
