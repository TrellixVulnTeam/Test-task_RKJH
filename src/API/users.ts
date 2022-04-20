import axios from "axios";

export const fetchUsers = async (page = 1, limit = 10) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

    return data
}
