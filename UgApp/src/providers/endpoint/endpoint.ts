import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class EndpointProvider {

    // EN desarrollo
   /*  public apiUrl = 'http://localhost:3050'; */
    // EN produccion
    public apiUrl = 'http://192.168.100.12:3050';

    // All Url's Paths
    private readonly customers: string = '/login';
    private readonly register: string = '/register';
    private readonly projectsByCategory: string = '/projectsByCategory';
    private readonly projectsByCourse: string = '/projectsByCourse';
    private readonly teachers: string = '/teachers';
    private readonly subjects: string = '/subjects';
    private readonly projects: string = '/projects';
    private readonly email: string = '/sendEmail';
    private readonly courses: string = '/courses';
    private readonly calificaEvaluador: string = '/calificaevaluador';
    private readonly permiteEvaluar: string = '/permiteevaluar';
    private readonly aulaProyecto: string = '/aulaProyecto';
    //

    constructor(
        private http: HttpClient
    ) { }

    // Get all Url to http request
    private get urlCustomers() {
        return this.apiUrl + this.customers;
    }
    private get urlRegister() {
        return this.apiUrl + this.register;
    }
    private get urlProjectsByCategory() {
        return this.apiUrl + this.projectsByCategory;
    }
    private get urlProjectsByCourse() {
        return this.apiUrl + this.projectsByCourse;
    }
    private get urlTeachers() {
        return this.apiUrl + this.teachers;
    }
    private get urlSubjects() {
        return this.apiUrl + this.subjects;
    }
    private get urlProjects() {
        return this.apiUrl + this.projects;
    }
    private get urlSendEmail() {
        return this.apiUrl + this.email;
    }
    private get urlCourses() {
        return this.apiUrl + this.courses;
    }
    private get urlCalificaEvaluador() {
        return this.apiUrl + this.calificaEvaluador;
    }
    private get urlPermiteEvaluar() {
        return this.apiUrl + this.permiteEvaluar;
    }
    private get urlAulaProyecto() {
        return this.apiUrl + this.aulaProyecto;
    }
    //

    login<T>(form): Observable<T> {
        const endpointUrl = `${this.urlCustomers}`;
        return this.http.post<T>(endpointUrl, form);
    }

    doRegister<T>(form): Observable<T> {
        const endpointUrl = `${this.urlRegister}`;
        return this.http.post<T>(endpointUrl, form);
    }

    getProjectsByCategory<T>(params: any): Observable<T> {
        const endpointUrl = `${this.urlProjectsByCategory}/${params}`;
        return this.http.get<T>(endpointUrl);
    }

    getProjectsByCourse<T>(params: any): Observable<T> {
        const endpointUrl = `${this.urlProjectsByCourse}/${params}`;
        return this.http.get<T>(endpointUrl);
    }

    getTeachers<T>(): Observable<T> {
        const endpointUrl = `${this.urlTeachers}`;
        return this.http.get<T>(endpointUrl);
    }

    getSubjects<T>(): Observable<T> {
        const endpointUrl = `${this.urlSubjects}`;
        return this.http.get<T>(endpointUrl);
    }

    getProjects<T>(): Observable<T> {
        const endpointUrl = `${this.urlProjects}`;
        return this.http.get<T>(endpointUrl);
    }

    sendEmail<T>(id): Observable<T> {
        const endpointUrl = `${this.urlSendEmail}`;
        return this.http.post<T>(endpointUrl, id);
    }

    getCourses<T>(): Observable<T> {
        const endpointUrl = `${this.urlCourses}`;
        return this.http.get<T>(endpointUrl);
    }

    calificacionEvaluador<T>(postData): Observable<T> {
        const endpointUrl = `${this.urlCalificaEvaluador}`;
        return this.http.post<T>(endpointUrl, postData);
    }

    permiteEvaluador<T>(postData): Observable<T> {
        const endpointUrl = `${this.urlPermiteEvaluar}`;
        return this.http.post<T>(endpointUrl, postData);
    }

    getAulaProyecto<T>(params: any): Observable<T> {
        const endpointUrl = `${this.urlAulaProyecto}/${params}`;
        return this.http.get<T>(endpointUrl);
    }
}

