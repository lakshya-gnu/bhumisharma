import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, X } from "lucide-react";
import { MeetingForm } from "./meeting-form";
import { MessageForm } from "./message-form";

export const Contact = () => {
    return (
        <div className="h-full w-full bg-neutral-100 px-6 py-8 lg:px-12 lg:py-14">
            <div className="font-raleway flex h-[50%] flex-col justify-evenly">
                <Heading />
                <FormButtons />
            </div>
        </div>
    );
};

const Heading = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-4xl font-semibold">Contact Me</h2>
            <div className="space-y-1">
                <h3 className="text-2xl font-semibold">Don&apos;t be shy!</h3>
                <p className="font-poppins text-neutral-600">
                    If you have a project in mind or would like to make an
                    enquiry simple select one of the following options
                </p>
            </div>
        </div>
    );
};

const FormButtons = () => {
    return (
        <div className="font-nunito flex max-w-sm flex-col space-y-2">
            <MeetingDialog />
            <MessageDialog />
        </div>
    );
};

const MeetingDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full text-base">
                    <ExternalLink className="mb-0.5 mr-2 h-5 w-5" />
                    <span>I&apos;d like to book you in</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm">
                <DialogHeader className="flex flex-row items-center justify-between">
                    <DialogTitle>I&apos;d like to book you in</DialogTitle>
                    <DialogClose>
                        <Button variant={"ghost"} size={"sm"}>
                            <X className="h-4 w-4" />
                        </Button>
                    </DialogClose>
                </DialogHeader>
                <MeetingForm />
            </DialogContent>
        </Dialog>
    );
};

const MessageDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full text-base">
                    <ExternalLink className="mb-0.5 mr-2 h-5 w-5" />
                    <span>I&apos;d like to just say hello</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm">
                <DialogHeader className="flex flex-row items-center justify-between">
                    <DialogTitle>I&apos;d like to book you in</DialogTitle>
                    <DialogClose>
                        <Button variant={"ghost"} size={"sm"}>
                            <X className="h-4 w-4" />
                        </Button>
                    </DialogClose>
                </DialogHeader>
                <MessageForm />
            </DialogContent>
        </Dialog>
    );
};
