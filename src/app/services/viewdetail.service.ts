import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { Product } from "src/app/models/product";

@Injectable({
  providedIn: 'root'
})

export class ViewdetailService {

  constructor(private http: HttpClient) { }
}



