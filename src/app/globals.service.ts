import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
	public onesignalID : any = null;
	public logintoken: any = null;
	public userdata: any = null;
	public api: string = null;

  constructor() {
		//this.onesignalID = "THIS IS ONESIGNAL ID, TEST";
		this.userdata = {
			'name': "[ not set ]"
		};
		this.api = "http://localhost/jakartabrosur/public/API/io/";
		this.api = "http://www.jakartabrosur.com/API/io/";
  }
}
