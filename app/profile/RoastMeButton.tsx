"use client"
import styles from "./profile.module.css"
import { useState } from "react"
import { generateRoast } from "../action"


export default function RoastMeButton({ songs }: any) {
    const [loading, setLoading] = useState(false)
    const [roast, setRoast] = useState("")

    async function handleClick() {
        const artistsName = songs.map((item: any) => item.track.artists[0].name)
        setLoading(true)
        setRoast("")

        try {
            const result = await generateRoast(artistsName)
            {result ? setRoast(result) : setRoast("The AI is speechless. Try Again.")}
        } catch (error) {
            console.error("Roast Error", error)
        } finally {
            setLoading(false)
        }
    }


    return (
        <>
            <button className={styles.roastMe} onClick={handleClick} disabled={loading}>{loading ? "Cooking..." : "Roast Me"}</button>

            {roast && (
                <div className={styles.popUp}>
                    <div className={styles.popUpBox}>
                        <p>{roast}</p>
                        <button onClick={() => { setRoast("") }}>&times;</button>
                    </div>
                </div>
            )}
        </>
    )
}