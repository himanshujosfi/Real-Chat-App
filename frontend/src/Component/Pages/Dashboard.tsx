import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ApiUrl } from "@/Common/Api";


export const Dashboard = () => {
    const { userId } = useParams()
    console.log("userID", userId)
    const getUser = async () => {
        const res = await fetch(ApiUrl + `/getUser/${userId}`, {
            method: "Get",
            headers: {
                "content-type": "application/json"
            },
            credentials: "include",
        })
        const data = await res.json()
        console.log(data)
    }

    useEffect(() => {
        if (userId) getUser();
    }, [userId]);

    return (
        <>
            test
        </>
    );
};
