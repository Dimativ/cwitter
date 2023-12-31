import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useUsers = (userId: string) => {
    const url = userId ? `/api/users/${userId}` : null;
    const {data , error, isLoading, mutate} = useSWR(url, fetcher);

    return {data, error , isLoading, mutate}
};

export default useUsers;