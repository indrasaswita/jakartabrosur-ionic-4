import { Component, OnInit } from '@angular/core';
import {GlobalsService} from "../globals.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";



class Port {
  public id: number;
  public bankname: string;
}


@Component({
  selector: 'app-editcustomerbankacc',
  templateUrl: './editcustomerbankacc.page.html',
  styleUrls: ['./editcustomerbankacc.page.scss'],
})
export class EditcustomerbankaccPage implements OnInit {

  private customerbankacc: any = null;
  private bankserror: boolean = false;
  private banks: any = [];
  private bankloading: boolean = false;
  private httpresult: Observable<any>;
  private selectedbank: any = null;

  constructor(
    private global: GlobalsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public http: HttpClient
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.customerbankacc = JSON.parse(params.special);
        this.getbankdata();
      }
    });
  }

  customerbankaccOptions: any = {
    header: 'Daftar Bank',
    subHeader: 'Pilih Bank Pelanggan:'
  };

  compareById(o1,o2) {
    if (o1 == null || o2 == null) {
      return false;
    }
    return o1.id === o2.id;
  }

  getbankdata(){
    this.banks = null;
    let url = this.global.api+"select/banks";

    let post = {
      'app_token': this.global.logintoken,
      'usertype': this.global.usertype,
      'userID': this.global.userdata.id
    };

    this.httpresult = this.http.post(
      url,
      post,
      {
        responseType: 'json'
      }
    );

    this.httpresult.subscribe(
    data => {
      if(data != null){
        if (data instanceof Array) {
          this.banks = data;


          this.banks.forEach(($ii, $i)=>{
            if($ii.id == this.customerbankacc.bank.id){
              this.selectedbank = $ii.id;
            }
          });

          this.bankserror = false;
        }else{
          console.log('ERROR OUTPUT FROM ' + url);
          this.bankserror = true;
          this.router.navigateByUrl('');
        }
      }
      this.bankloading = false;
    }, error => {
      console.log(error);
      this.bankloading = false;
    });
  }

  ngOnInit() {
  }

}
