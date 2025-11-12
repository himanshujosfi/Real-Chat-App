export const ApiUrl = "http://localhost:8000/v1"


export interface ApiRequestOptions extends RequestInit {
    body?: string;
}

export const apiRequest = async <T = string>(
    endpoint: string,
    options: ApiRequestOptions = {}
): Promise<T> => {
    try {
        const res = await fetch(`${ApiUrl}${endpoint}`, {
            method: options.method || "GET",
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
            },
            credentials: "include",
            body: options.body ? JSON.stringify(options.body) : undefined,
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data?.message || "Something went wrong");
        }

        return data as T;
    } catch (error) {
        console.error("API Request Error:", error);
        throw error;
    }
};

