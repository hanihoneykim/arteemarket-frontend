import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../api";

export default function useUser(){
    const { isLoading, data, isError } = useQuery(['me'], getMyProfile, {
        retry: false,
    } )
    return{
        userLoading: isLoading,
        user:data,
        isLoggedIn: !isError,
    }
}