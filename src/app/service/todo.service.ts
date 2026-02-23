import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TodoResponse } from "../models/todo-response.model";
import { TodoCreateDto } from "../models/todo-create.model";
import { PageResponse } from "../models/PageResponse";

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    private http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:8080/todos'


    getAll(): Observable<PageResponse<TodoResponse>> {
        return this.http.get<PageResponse<TodoResponse>>(this.apiUrl);
    }

    getById(id: string): Observable<TodoResponse>{
        return this.http.get<TodoResponse>(`${this.apiUrl}/${id}`)
    }

    private tempUserId = "e35fd281-fe31-4c1c-b2ae-274bcd5d0590";
    //create(userId: string, todo: TodoCreateDto): Observable<TodoResponse>{
    //    return this.http.post<TodoResponse>(`${this.apiUrl}/${userId}`, todo);
    //}

    create(todo: TodoCreateDto): Observable<TodoResponse>{
        return this.http.post<TodoResponse>(`${this.apiUrl}/${this.tempUserId}`, todo);
    }

}