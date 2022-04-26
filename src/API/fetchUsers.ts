import axios from "axios";

export const fetchUsers = async (page = 1 , limit = 10) => {
    const { data }  = await axios.get('https://jsonplaceholder.typicode.com/users', {
        params: {
            _limit: limit,
            _page: page
        }
    });

    return data
}

export const fetchUsersId = async (id: string) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return data
}
