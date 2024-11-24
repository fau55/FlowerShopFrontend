import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'https://flowershopbackend-t4e6.onrender.com/api/user/';

  constructor(private http: HttpClient) { }

  registerAsSeller(user: any) {
    return this.http.post(this.baseUrl + 'register/seller', user);
  }

  registerAsBuyer(user: any) {
    return this.http.post(this.baseUrl + 'register/buyer', user);
  }

  loginUser(user: any) {
    return this.http.post(this.baseUrl + 'login', user);
  }

  getAllUsers() {
    return this.http.get(this.baseUrl + 'get-all');
  }

  uploadProfilePic(id: string, profilePhoto: any) {
    return this.http.post(this.baseUrl + `upload/profilePic/${id}`, profilePhoto);
  }

  getProfilePhoto(id: string) {
    return this.http.get(this.baseUrl + `get/profilePic/${id}`);
  }

  editUser(id: string, user: any) {
    return this.http.post(this.baseUrl + `edit/${id}`, user);
  }

  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + `delete/${id}`);
  }

  getUserById(id: string) {
    return this.http.get(this.baseUrl + `get-user/${id}`)
  }

  toSendVerificationOTP(email: any) {
    return this.http.post('http://localhost:5000/api/bb/email/otp', email)
  }
}
