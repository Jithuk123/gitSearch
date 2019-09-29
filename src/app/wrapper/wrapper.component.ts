import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit{

  success: boolean;

  constructor(private toastr: ToastrService, private spinner: MatProgressSpinnerModule, private httpClient: HttpClient
  ) { }
  private baseUrl = 'https://api.github.com/users/';
  input: string;
  value = {};


  getDetails() {
    this.success = false;

    this.httpClient.get(this.baseUrl + this.input + `?access_token=a839e8d6a73d36f991c2e52ac5fb7e389427e511`).subscribe((res) => {
      this.success = true;
      this.value = res;
    },

      () => {
        this.toastr.error('Invalid Username', '', {
          timeOut: 3000
        });
      });
    // localStorage.setItem('dataSource', this.input);
    // console.log(localStorage.getItem('dataSource'));
    localStorage.getItem(this.input);
      JSON.parse( localStorage.getItem(this.input));
    
    // else {
    //   localStorage.setItem('dataSource', this.input);
    //   console.log(localStorage.getItem('dataSource'));
      // localStorage.setItem(this.input, JSON.stringify(this.value));
      // console.log(localStorage);


  }

  ngOnInit() {
    this.success =  true;

  }

}
