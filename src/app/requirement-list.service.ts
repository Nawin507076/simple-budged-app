import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirement } from './requirement';

@Injectable({
  providedIn: 'root'
})
export class RequirementListService {

  // httpClient1:HttpClient;

  constructor(private httpClient1: HttpClient) {
  }

  getRequirement():Observable<Requirement[]> {
    const url ='http://localhost:3000/requirements';
    return this.httpClient1.get<Requirement[]> (url);
    // [
    //   { id: 2000, title: "usb wire", contactMobile: "0640913826"},
    //   { id: 2000, title: "usb wire A", contactMobile: "0640913827"},
    //   { id: 2000, title: "usb wire B", contactMobile: "0640913828"}
    // ]
  }

}
