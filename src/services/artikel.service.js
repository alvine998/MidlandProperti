import http from "../http-common";

class ArtikelDataService {
    getAll(){
        return http.get("/artikel");
    }

    get(id){
        return http.get("/artikel/"+id)
    }
}

export default new ArtikelDataService();