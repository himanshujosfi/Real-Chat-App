import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ApiUrl } from "@/Common/Api";


export const Dashboard = () => {
    const { userId } = useParams()
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
    const getAllUser = async () => {
        const res = await fetch(ApiUrl + `/allUsers`, {
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
        getAllUser();
    }, [userId]);

    return (
        <>
            test
        </>
    );
};
