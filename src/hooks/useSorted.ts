import { IUser } from "../store/reducers/Users/type";
import { useMemo } from "react";

export interface ISortedProps {
    users: IUser[];
    sort: string;
    query: string;
}

const useSortedUsers = ({ users, sort, query }: ISortedProps) => {
    if (sort === 'name') {
        return [...users].sort((prev, next) => prev.name.localeCompare(next.name));
    }
    return [...users].sort((prev, next) => prev.address.city.localeCompare(next.address.city))
}

export const useSearchedUsers = ({ users, sort, query }: ISortedProps) => {
    const sortedUsers = useSortedUsers({ users, sort, query })

    return useMemo(
        () =>
            sortedUsers.filter((user) =>
                user.name.toLowerCase().includes(query.toLowerCase())),
        [users, sort, query])
}
