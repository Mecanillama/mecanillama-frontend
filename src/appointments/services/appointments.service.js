import http from "../../core/services/http-common";

export class AppointmentsApiService {
    getAll() {
      return http.get("/appointments");
    }
    getById(id) {
      return http.get(`/appointments/${id}`);
    }
    create(data) {
      return http.post("/appointments", data);
    }
    update(id, data) {
      return http.put(`/tutorials/${id}`, data);
    }
    delete(id) {
      return http.delete(`/tutorials/${id}`);
    }
    findByTitle(title) {
      return http.get(`/tutorials?title=${title}`);
    }
  }