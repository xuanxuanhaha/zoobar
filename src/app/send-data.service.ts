import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-urlencoded'
  })
};


@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  urlHost = 'https://zoobarandgrill.com.au/php/email_zoobar.php';
  urlUpload = 'https://zoobarandgrill.com.au/php/upload.php';
  
  constructor(private http: HttpClient) {}
  /* 
   * @param data Sending email service
   */
  sendEmail(data): Observable<any> {
    return this.http.post<any>(this.urlHost, data, httpOptions);
  }

  sendData(): Observable<any> {
    return this.http.post<any>(this.urlUpload, {}, httpOptions);
  }
}
