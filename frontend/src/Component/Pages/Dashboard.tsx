import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ApiUrl } from "@/Common/Api";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";


export const Dashboard = () => {
    const { userId } = useParams()
    const getUser = useQuery({
        queryKey: ["user", userId],
        queryFn: async () => {
            const res = await fetch(`${ApiUrl}/getUser/${userId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            if (!res.ok) throw new Error("Failed to fetch users");
            return res.json();
        },
        enabled: !!userId,
    });

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
        if (getUser.isSuccess) toast.success(" User fetched successfully");
        if (getUser.isError) toast.error(" Failed to fetch user");

        if (getAllUser.isSuccess) toast.success(" All users fetched successfully");
        if (getAllUser.isError) toast.error(" Failed to fetch all users");
    }, [
        getUser.isSuccess,
        getUser.isError,
        getAllUser.isSuccess,
        getAllUser.isError,
    ]);

    useEffect(() => {
        if (userId) getUser.refetch()
        getAllUser.refetch()
    }, [userId]);

    return (
        <>
            <div>
                {getUser.isLoading ? "Loading .." : getUser.data?.email}
            </div>
        </>
    );
};
