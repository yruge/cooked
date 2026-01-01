'use client'
import { signIn } from 'next-auth/react';

export default function Home() {
  return (
    <main>
      <div className="hero-layout">
        <h1 className='hero-intro'>Cooked</h1>
        <div className="hero-intro-1">
          <h2>AI Powered Judgement</h2>
          <p>Your Spotify Wrapped was a lie. Let our AI analyze your listening history and tell you the harsh truth about who you really are.</p>
          <button onClick={() => signIn("spotify", {callbackUrl: "/profile"})}><img src="/images/spotify-logo-removebg-preview.png" className="spotify-logo"width="20px" height="19px"/>Roast Me</button>
        </div>
      </div>

      <div className="wrapper">
        <div className="scrolling-text">
          <div className="scrolling-text-content">
            <h1>WARNING: EMOTIONAL DAMAGE AHEAD</h1><span>•</span >
            <h1>NO REFUNDS ON EGO</h1><span>•</span>
            <h1>AI IS WATCHING</h1><span>•</span>
            <h1>YES, WE SAW THE 10-HOUR RAIN SOUNDS</h1><span>•</span>
          </div>

          <div className="scrolling-text-content">
            <h1>WARNING: EMOTIONAL DAMAGE AHEAD</h1><span>•</span >
            <h1>NO REFUNDS ON EGO</h1><span>•</span>
            <h1>AI IS WATCHING</h1><span>•</span>
            <h1>YES, WE SAW THE 10-HOUR RAIN SOUNDS</h1><span>•</span>
          </div>
        </div>
      </div>


      <div className="hero-layout-1">
        <img src="/images/nigor.jpg" alt="Tyler The Creator Funny Album" className="tyler-creator" style={{maxWidth: '235px', height:"auto", left:'20px', top:'20px', transform: 'rotate(-5deg)',
      animationDelay: '0s'}}/>
        <img src="/images/drake-pregnant.jpg" alt="Drake Funny Album 1" className="drake-pregnant" style={{maxWidth:'200px', height:"auto", top:'20px', transform: 'rotate(5deg)',
      animationDelay: '2.5s'}} />
        <img src="/images/tame-impala.jpg" alt="Tame Impala Funny Album" className='tame-impala' style={{maxWidth:'242px', height:"auto", top:'50px', right:'50px', transform: 'rotate(2deg)',
      animationDelay: '1s'}}/>
        <img src="/images/drake-funny-album.jpg" alt="Drake Funny Album 2" className='drake-2' style={{maxWidth:'280px', height:"auto", left:'100px'}}/>
        <img src="/images/snoop-dogg.jpg" alt="Snoop Dogg Funny Picture" className="snoop-dogg" style={{maxWidth:'276px', height:"auto", bottom:'20px',left:'80px', transform: 'rotate(-4deg)',
      animationDelay: '6.5s'}}/>
        <img src="/images/drake-pooped.jpg" alt="Drake Funny Album 3" className="drake-pooped" style={{maxWidth:'250px', height:"auto", left:'30px', transform: 'rotate(6deg)',
      animationDelay: '3.5s'}}/>
      </div>
    </main>
  );
}
