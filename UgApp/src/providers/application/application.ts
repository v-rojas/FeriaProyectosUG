import { Injectable } from '@angular/core';
import { EndpointProvider } from '../endpoint/endpoint';


@Injectable()
export class ApplicationProvider {

  constructor(
    private coreEndpoint: EndpointProvider
  ) { }

  login(form) {
    return this.coreEndpoint.login(form);
  }

  doRegister(form) {
    return this.coreEndpoint.doRegister(form);
  }

  getProjectsByCategory(params: any) {
    return this.coreEndpoint.getProjectsByCategory(params);
  }

  getProjectsByCourse(params: any) {
    return this.coreEndpoint.getProjectsByCourse(params);
  }

  getTeachers() {
    return this.coreEndpoint.getTeachers();
  }

  getSubjects() {
    return this.coreEndpoint.getSubjects();
  }

  getProjects() {
    return this.coreEndpoint.getProjects();
  }

  sendEmail(id) {
    return this.coreEndpoint.sendEmail(id);
  }

  getCourses() {
    return this.coreEndpoint.getCourses();
  }

  calificacionEvaluador(form) {
    return this.coreEndpoint.calificacionEvaluador(form);
  }

  permiteEvaluador(form) {
    return this.coreEndpoint.permiteEvaluador(form);
  }

  getAulaProyecto(params: any) {
    return this.coreEndpoint.getAulaProyecto(params);
  }
}
