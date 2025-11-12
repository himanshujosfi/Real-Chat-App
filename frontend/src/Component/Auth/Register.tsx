
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/Common/Api";
import { toast } from "react-toastify";


export const Register = () => {
    const formSchema = z.object({
        name: z.string().min(2, { message: "Username must be at least 2 characters." }),
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(4, { message: "Password must be at least 4 charactor" })
    });

    type RegisterFormValues = z.infer<typeof formSchema>;
    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
    });

    const onSubmit = async (values: RegisterFormValues) => {
        try {
            const response = await apiRequest("/register", {
                method: "Post",
                body: values
            })
            // const res = response.json()
            toast.success("User Register successfully:")
            // console.log(res)
            // console.log(" Form submitted:", values);
            return response.json()
        } catch (error: any) {
            toast.error("Error submitting form:", err);
        }
    };
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>
                    <Form
                        {...form}
                    >
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Username" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
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
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                    <p className="text-sm text-center text-gray-500 mt-6">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-600 hover:underline">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};
