import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AppService {
    constructor(private http: HttpClient) { }

    getJokesCategories(): Observable<any> {
        let url = "https://api.chucknorris.io/jokes/categories";
        return this.http.get(url, { params: null, headers: null });
    }

    getJoke(category: string): Observable<any> {
        let url = `https://api.chucknorris.io/jokes/random?category=${category}`;
        return this.http.get(url, { params: null, headers: null })
    }

    search(query: string): Observable<any> {
        let url = `https://api.chucknorris.io/jokes/search?query=${query}`
        return this.http.get(url, { params: null, headers: null })
    }
}