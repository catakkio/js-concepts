// user.service.ts //
// user.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiUrl = "https://api.example.com/users"; // API URL

  constructor(private http: HttpClient) {}

  // Method to make a GET request to fetch users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

////////////////////////////////////////////////////////////////
// user.component.ts

import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  users: any[]; // Array to hold users data

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Fetch users data when the component initializes
    this.userService.getUsers().subscribe((users) => {
      this.users = users; // Assign fetched users data to component property
    });
  }
}
