import http from "../../core/services/http-common";

export class WorkshopsApiService {
    getAll() {
        return http.get("/workshops");
      }
}