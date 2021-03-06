import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  success: boolean;

  constructor(private toastr: ToastrService, private spinner: MatProgressSpinnerModule, private httpClient: HttpClient
  ) { }
  private baseUrl = 'https://api.github.com/users/';
  input: string;
  value = {};


  getDetails() {
 
    if (localStorage.getItem(this.input)) {
      this.value = JSON.parse(localStorage.getItem(this.input));
      
    } else {
      this.success = false;
      this.httpClient.get(this.baseUrl + this.input ).subscribe((res) => {
      this.success = true;
      this.value = res;
      localStorage.setItem('dataSource', this.input);
      console.log(localStorage.getItem('dataSource'));
      localStorage.setItem(this.input, JSON.stringify(this.value));
      console.log(localStorage);
    },

      () => {
        this.toastr.error('Invalid Username', '', {
          timeOut: 3000
        });
      });
    // localStorage.setItem('dataSource', this.input);
    // console.log(localStorage.getItem('dataSource'));
    
    // }
  }
  }

  ngOnInit() {
    this.success =  true;

  }

}
