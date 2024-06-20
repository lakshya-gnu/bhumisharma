import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// TODO: Add your protected routes here
const isProtectedRoute = createRouteMatcher([""]);

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
