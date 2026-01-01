import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import styles from "./profile.module.css"
import Image from "next/image"
import SignOutButton from './SignOutButton';
import RoastMeButton from "./RoastMeButton"

async function getRecentlyPlayed(session: any) {
    if (!session) redirect("/")

    const res = await fetch("https://api.spotify.com/v1/me/player/recently-played", {
        headers: { Authorization: "Bearer " + session?.accessToken },
        cache: "no-store"
    });

    if (!res.ok) { console.log("unable to get data") }

    const data = await res.json();

    return data.items
}

export default async function ProfilePage() {
    const session = await getServerSession(authOptions)
    const song = await getRecentlyPlayed(session)

    return (
        <div className={styles.profileContainer}>
            <SignOutButton/>
            <div className={styles.profilePage}>
                <div className={styles.profile}>
                    <div className={styles.profileContent}>
                          {session?.user?.image ? (
                        <Image
                            src={session.user.image}
                            alt="Profile Image"
                            width={100}
                            height={100}
                            className="rounded-full object-cover w-[40px] h-[40px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
                        />
                    ) : (
                        /* Optional: Render a fallback div or icon if no image */
                        <div style={{ width: 50, height: 50, background: '#ccc', borderRadius: '50%' }} />
                    )}
                        <h1>{session?.user?.name}'s recently played songs</h1>
                    </div>
                    <RoastMeButton songs={song} className={styles.roastMe}/>
                </div>

                {/* <div style={{ background: '#333', color: '#0f0', padding: '20px', marginTop: '50px', borderRadius: '10px' }}>
                    <h3>Debug Data:</h3>
                    <pre>
                        {JSON.stringify(song, null, 2)}
                    </pre>
                </div> */}

                <div className={styles.profileSongs}>
                    {song && song.map((item: any, index: number) =>
                        <div key={index} className={styles.songContainer}>
                            {item.track.album.images && item.track.album.images[2] ? (
                                <Image src={item.track.album.images[2].url} alt="Album Image" width={64} height={64}/>
                            ) : (<div style={{ width: 30, height: 30, background: '#ccc' }} />)}
                            <div className={styles.songInfo}>
                                <h1 className={styles.songName}>{item.track.name}</h1>
                                <p className={styles.songArtist}>{item.track.artists.map((artists: any) => artists.name).join(", ")}</p>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}