import http from "../../core/services/http-common";

export class AppointmentsApiService {
    getAll() {
      return http.get("http://localhost:3000/appointments");
    }
    getById(id) {
      return http.get(`http://localhost:3000/appointments/${id}`);
    }
    create(data) {
      return http.post("http://localhost:3000/appointments", data);
    }
    update(id, data) {
      return http.put(`http://localhost:3000/appointments${id}`, data);
    }
    delete(id) {
      return http.delete(`http://localhost:3000/appointments${id}`);
    }
    findByCustomer(customer) {
      return http.get(`http://localhost:3000/appointments?customer=${customer}`);
    }
  }