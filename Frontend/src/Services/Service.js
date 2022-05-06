import http from "../http-common";

class DataService{
    create(data){
        return http.post("/users", data);
    }
}
export default new DataService;