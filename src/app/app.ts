import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  imports: [FormsModule],
  selector: 'app-tarasato',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  username = 'Tarasato';
  firstName = 'Taramiratsu';
  middleName = 'Atlas';
  lastName = 'Xato';
  yearOfBirth = 2004;
  userPermission = "root";

  showFullName() {
    return "Full Name: " + this.firstName + " " + this.middleName + " " + this.lastName;
  }

  imageUrl = "https://avatars.githubusercontent.com/u/113956880?v=4&size=64"
  width = 64;
  hight = 64;

  tripleWidth() {
    return this.width * 3;
  }

  tripleHeight() {
    return this.hight * 3;
  }

  showMsg() {
    alert("Hello, Angular!");
  }

  loginStatusTest="Login";
  isLogin=false;
}
