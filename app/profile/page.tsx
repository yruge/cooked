import { handler } from "api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { redirect } from 'next/navigation';

export default function ProfilePage() {
    return(
        <div>
            <h1>hi</h1>
        </div>
    )
}