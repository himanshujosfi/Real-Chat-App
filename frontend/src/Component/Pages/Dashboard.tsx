import { useContext, useEffect } from "react";
import { ApiUrl } from "@/Common/Api";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { contextUserData } from "@/context/ContextUser";


export const Dashboard = () => {
    const { user, refetch, isLoading } = useContext(contextUserData)
    console.log("user", user)

    useEffect(() => {
        refetch()
    }, [])


    const getAllUser = useQuery({
        queryKey: ["getAll"],
        queryFn: async () => {
            const res = await fetch(ApiUrl + `/allUsers`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            if (!res.ok) throw new Error("Failed to fetch all users");
            return res.json();
        },
    });


    useEffect(() => {
        if (getAllUser.isSuccess) toast.success(" All users fetched successfully");
        if (getAllUser.isError) toast.error(" Failed to fetch all users");
    }, [
        getAllUser.isSuccess,
        getAllUser.isError,
    ]);

    useEffect(() => {
        getAllUser.refetch()
    }, []);

    return (
        <>
            <div>
                {isLoading ? "Loading .." : user.email}
            </div>
        </>
    );
};
