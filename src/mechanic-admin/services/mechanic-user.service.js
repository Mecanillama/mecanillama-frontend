import http from "../../core/services/http-common";

export class MechanicUserService {
  getById(id) {
    return http.get(`/mechanics/${id}`);
  }
  update(id, data) {
    return http.put(`/mechanics${id}`, data);
  }
}
