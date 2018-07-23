import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teams: Array<Object> = [
    {
      year: 2014,
      champion : "San Antonio Spurs",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ32kKQwbxmsj7QAdit3V2Pf-SgDdpgkKrzZ0l8nX9iCGOzDTHkA",
      players: ["Lebron James", "Kyrie Irving", "Kevin Love"]
    },
    {
      year: 2015,
      champion : "Golden State Warriors",
      url:"data:image/png;base64,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",
      players: ["Stephen Curry", "Klay Thompson", "Draymon Green"]
    },
    {
      year: 2016,
      champion : "Cleveland Cavaliers",
      url:"data:image/jpeg;base64,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",
      players: ["Tim Duncan", "Tony Parker", "Manu Ginóbili"]
    }
]
}