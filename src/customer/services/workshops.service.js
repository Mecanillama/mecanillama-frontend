import http from "../../core/services/http-common";

export class WorkshopsApiService {
    getAll() {
        return http.get("http://localhost:3000/workshops");
      }
}