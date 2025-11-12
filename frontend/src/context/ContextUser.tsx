import { ApiUrl } from "@/Common/Api";
import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect } from "react";
import { toast } from "react-toastify";

export const contextUserData = createContext();

export const ContextUser = ({ children }) => {
    const userId = localStorage.getItem("userId")
    // console.log("user", userId)
    const { data: user, isSuccess, isError, refetch, isLoading } = useQuery({
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

    useEffect(() => {
        if (isSuccess) toast.success("User fetched successfully");
        if (isError) toast.error("Failed to fetch user");
    }, [isSuccess, isError]);

    return (
        <contextUserData.Provider value={{ user, refetch, isLoading }}>
            {children}
        </contextUserData.Provider>
    );
};
