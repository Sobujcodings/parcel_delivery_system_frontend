import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Field,
    FieldGroup,

} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { useForm } from "react-hook-form"
import { useCreateParcelMutation } from "@/redux/features/parcels/getAllparcels.api"


const Createparcel = () => {
    const form = useForm({
        shouldUnregister: true
    });

    const [createParcel, { data, isLoading, error }] = useCreateParcelMutation();


    // submit r value gula valiate korte hobe using useform n zod then create, create korar por shob existed field r value khali kore 
    const onSubmit = async (data: unknown) => {
        console.log('data', data);
        try {
            const response = await createParcel(data).unwrap();
            console.log('response', response);
            toast("✅ Parcel created successfull", {
                description: response.message,
                action: {
                    label: "Close",
                    onClick: () => console.log("close clicked"),
                },
            });
        } catch (error) {
            console.log('error', error);
            const err = error as Error;
            toast("❌ Failed to create parcel!", {
                description: err?.data?.message || "Something went wrong",
            });
        }
    };


    return (
        <div className="flex flex-col items-center justify-center py-3 md:py-5">
            <div className="max-w-lg md:max-w-l w-full">
                <div className="flex flex-col gap-6">
                    {/* <div className={cn("flex flex-col gap-6", className)} {...props}> */}
                    <Card className="overflow-hidden p-0">
                        <CardContent className="grid p-0">
                            <Form {...form}>
                                <form className="p-6 md:px-8" onSubmit={form.handleSubmit(onSubmit)}>
                                    <FieldGroup>
                                        <div className="flex flex-col items-center gap-2 text-center">
                                            <h1 className="text-2xl font-bold">Create Parcel</h1>
                                            <p className="text-muted-foreground text-balance">

                                            </p>
                                        </div>
                                        <FormField
                                            control={form.control}
                                            name="fromAddress"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>From Address</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="from_address" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="toAddress"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>To Address</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="to_address" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="receiver_email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Receiver email</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="receiver_email" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="sender_email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Sender email</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="sender_email" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="weight"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Weight</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="weight" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="deliveryFee"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Delivery fee</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="delivery_fee" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Phone</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="phone" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Field>
                                            <Button type="submit">Create Parcel</Button>
                                        </Field>

                                    </FieldGroup>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Createparcel;