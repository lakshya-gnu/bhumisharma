"use client";
import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
    return (
        <div className="">
            <UserProfile path="/user-profile" routing="path" />
        </div>
    );
};

export default UserProfilePage;
