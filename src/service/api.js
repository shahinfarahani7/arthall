import axios from "axios";
const baseUrl = "http://localhost:5005/api";


const api = {
    getTodoList: (body) => {
        return axios.get(`${baseUrl}/get_todo_list`);
    },
    addTodo: (body) => {
        return axios.post(`${baseUrl}/add_todo`, body);
    },
}

export default api;
