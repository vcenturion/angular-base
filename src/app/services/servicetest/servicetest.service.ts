import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicetestService {

  public data = ['1'];

  public url: string;

  // .pipe(map(res => res.json()));

  constructor(private http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }

  test(): string {
    return 'asd';
  }

  addData(d: string): void {
    this.data.push(d);
  }

  getData(): Array<string> {
    return this.data;
  }

  getArticulos(): any {
    return this.http.get(this.url).pipe(map(res => res));
  }
}
