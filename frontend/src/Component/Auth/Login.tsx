


import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ApiUrl } from "@/Common/Api";
import { Navbar } from "../Navbar/Navbar";

export const Login = () => {
    const navigator = useNavigate()
    const formSchema = z.object({
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(4, { message: "Password must be at least 4 charactor" })
    });

    type RegisterFormValues = z.infer<typeof formSchema>;
    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const onSubmit = async (values: RegisterFormValues) => {
        try {
            const response = await fetch(ApiUrl + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const res = await response.json();

            if (response.ok) {
                console.log("Form submitted successfully:", res);
                navigator(`/${res.user.id}`);
            } else {
                console.error("Login failed:", res.message);
                alert(res.message || "Login failed");
            }
        } catch (err) {
            console.error("Error submitting form:", err);
        }
    };
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-semibold text-center mb-6">Login With Your Account</h2>

                    <Form
                        {...form}
                    >
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Log In</Button>
                        </form>
                    </Form>
                    <p className="text-sm text-center text-gray-500 mt-6">
                        Create new an account?{" "}
                        <a href="/register" className="text-blue-600 hover:underline">
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};
