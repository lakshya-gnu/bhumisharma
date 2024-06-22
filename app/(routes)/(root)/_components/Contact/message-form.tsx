import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { toast } from "sonner";

import {
    MessageFormType,
    messageFormSchema,
} from "@/lib/zod/message-form-schema";
import { addMessage } from "@/lib/actions/add-message";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export const MessageForm = () => {
    const form = useForm<MessageFormType>({
        resolver: zodResolver(messageFormSchema),
        defaultValues: {
            name: "",
            email: "",
            profession: "",
            message: "",
            source: "",
        },
    });

    async function onSubmit(values: MessageFormType) {
        try {
            const response = await addMessage(values);
            if (response) {
                toast.success("Message Received! I will get back to you soon.");
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error(error as string);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="name">Your Name</Label>
                            <FormControl>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    {...field}
                                />
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
                            <Label htmlFor="email">Your Email</Label>
                            <FormControl>
                                <Input
                                    id="email"
                                    type="text"
                                    placeholder="johndoe@example.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="profession"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="profession">Your Profession</Label>
                            <FormControl>
                                <Input
                                    id="profession"
                                    type="text"
                                    placeholder="Software Developer at Google"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="message">Your Profession</Label>
                            <FormControl>
                                <Textarea
                                    id="message"
                                    placeholder="Please provide a brief message about the meeting"
                                    {...field}
                                    className="resize-none"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="source"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="source">Your Message</Label>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger id="source">
                                        <SelectValue placeholder="How did you hear about me?" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Worked Together Before">
                                            We&apos;ve worked together before.
                                        </SelectItem>
                                        <SelectItem value="Through Social Media">
                                            Through Social Media
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};
