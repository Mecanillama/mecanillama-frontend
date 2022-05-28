import http from "../../core/services/http-common";

export class MechanicsProfileApiService {
  getAll() {
    return http.get("/workshops");
  }
  getById(id) {
    return http.get(`/workshops/${id}`);
  }
  create(data) {
    return http.post("/workshops", data);
  }
  update(id, data) {
    return http.put(`/workshops/${id}`, data);
  }
  delete(id) {
    return http.delete(`/workshops/${id}`);
  }
}
