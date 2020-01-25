import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  delay
} from 'rxjs/operators';
import {
  User
} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private USERS_URL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get < User[] > (this.USERS_URL).pipe(
      delay(500)
    );
  }
}
