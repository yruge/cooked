"use client"
import { signOut } from "next-auth/react"
import styles from "./profile.module.css"

export default function SignOutButton() {
    return (
        <button onClick={() => signOut({callbackUrl: "/"})} className={styles.signOut}> Sign Out</button >
    )
}