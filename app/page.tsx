import './globals.css'
export default function Home() {
  return (
    <main>
      <div className="hero-layout">
        <h1 className='hero-intro'>Cooked</h1>
        <div className="hero-intro-1">
          <h2>AI Powered Judgement</h2>
          <p>Your Spotify Wrapped was a lie. Let our AI analyze your listening history and tell you the harsh truth about who you really are.</p>
          <button>Roast Me</button>
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
        <img src="/images/nigor.jpg" alt="Tyler The Creator Funny Album" width="185px" height="187px" style={{right:'20%', top:'5%'}}/>
        <img src="/images/drake-pregnant.jpg" alt="Drake Funny Album 1" className="drake-pregnant" width="180px" height="180px" style={{left:'40%', top:'20%'}} />
        <img src="/images/tame-impala.jpg" alt="Tame Impala Funny Album" width="242px" height="229px" style={{top:'10%', left:'1%'}}/>
        <img src="/images/drake-funny-album.jpg" alt="Drake Funny Album 2" width="280px" height="auto" style={{bottom:'15%', right:'27%'}}/>
          <img src="/images/snoop-dogg.jpg" alt="Snoop Dogg Funny Picture" className="snoop-dogg" width="177px" height="177px" style={{bottom:'10%', left:'20%'}}/>
        <img src="/images/drake-pooped.jpg" alt="Drake Funny Album 3" className="drake-pooped" width="179px" height="143px" style={{bottom:'20%', right:'10%'}}/>
      </div>
    </main>
  );
}
