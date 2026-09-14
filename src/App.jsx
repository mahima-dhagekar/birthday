import { useState, useEffect, useRef } from "react";

// ══════════════════════════════════════════════════════
// 🎨 PERSONALIZATION
// ══════════════════════════════════════════════════════
const config = {
  girlfriendName: "Mahima",
  yourName: "Ankit",
  dateOfBirth: "2004-09-15",
  firstChatDate: "2026-08-29",
  birthdayMessage:
    "I don't know where to begin, because honestly… you deserve more than words could ever say. But today, on your birthday, I want to try anyway. You've made my ordinary days feel like adventures, my hard days feel lighter, and my heart feel full in ways I didn't know were possible. You've only been in my life for a few weeks — and yet somehow it feels like you've always been here. Thank you for being you — endlessly, beautifully, wonderfully you.",
  timeline: [
    { date: "29 August 2026", title: "The Beginning", desc: "The day you first appeared in my world. I had no idea what was starting.", emoji: "✨" },
    { date: "September 2026", title: "Getting To Know You", desc: "Every conversation made me want the next one.", emoji: "💬" },
    { date: "15 September 2026", title: "Your Birthday 🎂", desc: "The day I get to celebrate the best thing that's happened to me lately.", emoji: "🎂" },
    { date: "Someday Soon", title: "Our First Adventure", desc: "Still writing this part… but I already can't wait.", emoji: "🌅" },
    { date: "Today ✨", title: "Right Now", desc: "And here we are. And I wouldn't change a single thing.", emoji: "❤️" },
  ],
  reasons: [
    "Your smile that could light up any room.",
    "The way you laugh — genuinely, freely.",
    "How you make ordinary days feel special.",
    "Your little habits I've grown to adore.",
    "The way you care about everyone around you.",
    "Simply because you're you.",
    "Your kindness, always without conditions.",
    "How you listen — really, truly listen.",
    "The warmth you bring into every space.",
    "Your eyes when you're excited about something.",
    "The way you say my name.",
    "How you make me want to be better.",
    "Your strength, even when you don't see it.",
    "The late nights and long conversations.",
    "How you find beauty in small things.",
    "Your voice when you talk about what you love.",
    "The way you hug — like you actually mean it.",
    "Your sense of humor that sneaks up on me.",
    "How you remember the little details.",
    "The way you say sorry when you mean it.",
    "Your courage — quiet, steady, real.",
    "How you make silence comfortable.",
    "The little faces you make without realizing.",
    "The way you take care of people you love.",
    "How you've grown without losing yourself.",
    "Your honest thoughts, even when they're messy.",
    "The way everything feels lighter with you.",
    "How you turn small moments into memories.",
    "Your patience, especially with me.",
    "Simply the fact that you exist in my world.",
    "Your curiosity about everything.",
    "How you make me laugh without even trying.",
    "The way you see the good in people.",
    "Your love for the things you love.",
    "How you're always you — no performance, no pretense.",
    "The way you've made space for me.",
    "Your resilience on hard days.",
    "How you dream — boldly, beautifully.",
    "The way the world feels softer with you in it.",
    "Because I fall for you a little more every day.",
    "Your heart — the way it works, the way it loves.",
    "How you make me feel seen.",
    "The way you hold on.",
    "Your warmth that's impossible to miss.",
    "Because you deserve every good thing.",
    "How you've changed me — gently, completely.",
    "The way you light up around things that matter.",
    "Because no list could ever be long enough.",
    "Because you're my favorite everything. ❤️",
  ],
  openWhen: [
    { label: "you're missing me", emoji: "💭", message: "I'm right here. In every voice note you saved, in every song that reminds you of us, in every inside joke that makes you smile alone. You don't have to miss me too hard — I'm close. Just close your eyes and you'll feel it. I'm thinking of you too. Always." },
    { label: "you're sad", emoji: "🌧️", message: "Hey. I know today feels heavy. And that's okay. You don't have to be okay right now. But I need you to know — this feeling passes. It always does. And you're stronger than you think you are. I've seen it. I believe in you even on the days you don't believe in yourself. Let yourself feel it, then let it go. I'm here." },
    { label: "you need a smile", emoji: "😊", message: "Remember that ridiculous thing we said that one time? The one that made no sense but we still laughed? Yeah. That. You have the most contagious laugh in the universe and I will never get tired of it. Also — you're objectively adorable and I think you should smile more. 😄❤️" },
    { label: "you can't sleep", emoji: "🌙", message: "The stars are out right now. And somewhere, I'm probably staring at the same sky. The night feels a little less quiet knowing you're awake in it too. Close your eyes. Count the things you're grateful for. Let yourself rest — you deserve it. Sleep well. ❤️" },
    { label: "you want to know how much I love you", emoji: "❤️", message: "More than I know how to say. More than fits in this little letter. More than the clichés and the songs and every love poem ever written. You make me feel things I didn't have words for before. You are one of the best things that has ever happened to me. I love you. Entirely. Without question." },
    { label: "on your next birthday", emoji: "🎂", message: "Another year has gone by. Can you believe it? I hope this year treated you well. I hope you laughed more than you cried, grew more than you expected, and loved every version of yourself along the way. Happy birthday again, my love. Here's to another year of you being incredible." },
  ],
  future: [
    { emoji: "🌍", dream: "Travel somewhere neither of us has ever been" },
    { emoji: "🌅", dream: "Watch a sunrise together from somewhere beautiful" },
    { emoji: "🍿", dream: "Have the perfect movie night — full snacks, no interruptions" },
    { emoji: "🍕", dream: "Try every weird restaurant we keep bookmarking" },
    { emoji: "🌊", dream: "A beach trip with no plans and no rush" },
    { emoji: "🌌", dream: "Lie under the stars and just exist for a while" },
    { emoji: "📸", dream: "Take way too many photos and never apologize for it" },
    { emoji: "🏠", dream: "Build something cozy together, wherever home turns out to be" },
  ],
  giftReveal: "I wanted you to know — every moment with you feels like a gift. This website is just my way of trying to hold some of those moments in a place you could revisit whenever you need to remember how loved you are. You deserve the world, and I'm going to keep trying to give it to you. ❤️",
  finalMessage: "If I could give you one thing today… I would give you the ability to see yourself through my eyes. Because maybe then you'd understand just how incredibly special you are to me.",
};

// ══════════════════════════════════════════════════════
// 📸 PHOTOS — Add your image files to the /photos folder
// Then list the filenames below (e.g. "photo1.jpg")
// ══════════════════════════════════════════════════════
const photoFiles = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
  "photo6.jpg",
  "photo7.jpg",
  "photo8.jpg" 
];
const photos = photoFiles.map((f, i) => ({
  id: i,
  src: `./src/photos/${f}`,
  caption: "",
}));

// ══════════════════════════════════════════════════════
// 🎵 MUSIC — Add your audio file to the /music folder
// Then set the filename below (e.g. "oursong.mp3")
// ════════════════════════════════════════════════


const SONG_FILE = "song.mp3"; // Put song.mp3 in src/music/
const SONG_NAME = "Kya";
// Vite-safe asset URL. This works in both development and production builds.
const songSrc = new URL(`./music/${SONG_FILE}`, import.meta.url).href;

// ══════════════════════════════════════════════════════
// 🎵 MUSIC PLAYER — AUTOPLAY + LOOP + AUTOPLAY FALLBACK
// ══════════════════════════════════════════════════════
function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [expanded, setExpanded] = useState(false);
  const [bars, setBars] = useState(Array(16).fill(0.1));
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const audioRef = useRef(null);
  const autoplayAttemptedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
      setProgress(
        audio.duration && isFinite(audio.duration)
          ? (audio.currentTime / audio.duration) * 100
          : 0
      );
    };

    const onLoadedMetadata = () => {
      if (isFinite(audio.duration)) setDuration(audio.duration);
    };

    const onPlay = () => {
      setIsPlaying(true);
      setAutoplayBlocked(false);
    };

    const onPause = () => setIsPlaying(false);

    const onError = () => {
      console.error(`Unable to load music: ${songSrc}`);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("error", onError);
    };
  }, []);

  // Try autoplay immediately. Browsers may block audible autoplay.
  // In that case, the first real user interaction starts the song.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let handled = false;

    const startMusic = async () => {
      if (handled) return;
      try {
        await audio.play();
        handled = true;
        setIsPlaying(true);
        setAutoplayBlocked(false);
        cleanup();
      } catch (error) {
        setAutoplayBlocked(true);
      }
    };

    const cleanup = () => {
      document.removeEventListener("pointerdown", startMusic);
      document.removeEventListener("keydown", startMusic);
      document.removeEventListener("touchstart", startMusic);
    };

    // Try without requiring the user to click.
    const timer = setTimeout(startMusic, 150);

    // If the browser blocks autoplay, any click/tap/key press can start it.
    document.addEventListener("pointerdown", startMusic, { passive: true });
    document.addEventListener("keydown", startMusic);
    document.addEventListener("touchstart", startMusic, { passive: true });

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, []);

  // Animated visualizer bars.
  useEffect(() => {
    if (!isPlaying) {
      setBars(Array(16).fill(0.1));
      return;
    }

    const iv = setInterval(() => {
      setBars(
        Array(16).fill(0).map((_, i) => {
          const c = Math.abs(i - 8) / 8;
          return 0.15 + (1 - c) * Math.random() * 0.85;
        })
      );
    }, 120);

    return () => clearInterval(iv);
  }, [isPlaying]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio || !songSrc) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
        setAutoplayBlocked(false);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Music playback error:", error);
    }
  };

  const seek = (e) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration || !isFinite(audio.duration)) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches?.[0]?.clientX ?? e.clientX;
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
  };

  const fmt = (s) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  if (!songSrc) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "5rem",
        left: "0.75rem",
        zIndex: 200,
        width: expanded ? "min(280px, calc(100vw - 1.5rem))" : "52px",
        transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        background: "rgba(10,0,20,0.93)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(192,132,252,0.35)",
        borderRadius: expanded ? "20px" : "50%",
        boxShadow: isPlaying
          ? "0 0 30px rgba(147,51,234,0.5),0 8px 32px rgba(0,0,0,0.5)"
          : "0 8px 32px rgba(0,0,0,0.4)",
        overflow: "hidden",
      }}
    >
      <audio ref={audioRef} src={songSrc} preload="auto" loop playsInline />

      {!expanded && (
        <button
          onClick={async () => { setExpanded(true); try { await audioRef.current?.play(); setIsPlaying(true); setAutoplayBlocked(false); } catch (e) { setAutoplayBlocked(true); } }}
          aria-label="Open music player"
          style={{
            width: "52px", height: "52px", background: "transparent", border: "none",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.3rem", position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute", inset: 0, borderRadius: "50%",
              background: isPlaying ? "radial-gradient(circle,rgba(147,51,234,0.3),transparent)" : "transparent",
              animation: isPlaying ? "pulseRing 2s ease-in-out infinite" : "none",
            }}
          />
          🎵
        </button>
      )}

      {expanded && (
        <div style={{ padding: "0.85rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem" }}>
            <div style={{ fontSize: "0.65rem", color: "rgba(192,132,252,0.8)", letterSpacing: "0.1em" }}>🎵 OUR SONG</div>
            <button
              onClick={() => setExpanded(false)}
              aria-label="Close music player"
              style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: "1.1rem", lineHeight: 1, padding: "0 4px" }}
            >×</button>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "2px", height: "30px", marginBottom: "0.6rem" }}>
            {bars.map((h, i) => (
              <div
                key={i}
                style={{
                  width: "8px", borderRadius: "3px 3px 0 0", height: `${h * 30}px`,
                  background: `hsl(${280 + i * 5},70%,${55 + h * 25}%)`, transition: "height 0.12s ease",
                }}
              />
            ))}
          </div>

          <div style={{ textAlign: "center", color: "#e9d5ff", fontSize: "0.78rem", fontWeight: "500", marginBottom: "0.6rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {SONG_NAME || SONG_FILE}
          </div>

          <div style={{ marginBottom: "0.5rem" }}>
            <div onClick={seek} onTouchStart={seek} style={{ height: "4px", background: "rgba(255,255,255,0.15)", borderRadius: "2px", cursor: "pointer", position: "relative", marginBottom: "0.25rem" }}>
              <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${progress}%`, borderRadius: "2px", background: "linear-gradient(90deg,#7c3aed,#ec4899)", transition: "width 0.1s linear" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.6rem", color: "rgba(255,255,255,0.35)" }}>
              <span>{fmt(currentTime)}</span>
              <span>{fmt(duration)}</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.6rem" }}>
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause music" : "Play music"}
              style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg,#7c3aed,#ec4899)", border: "none", color: "#fff", fontSize: "1rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: isPlaying ? "0 0 20px rgba(147,51,234,0.6)" : "none", transition: "all 0.3s" }}
            >
              {isPlaying ? "⏸" : "▶"}
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span style={{ fontSize: "0.7rem" }}>🔈</span>
            <input
              type="range" min="0" max="1" step="0.05" value={volume}
              onChange={e => {
                const v = parseFloat(e.target.value);
                setVolume(v);
                if (audioRef.current) audioRef.current.volume = v;
              }}
              aria-label="Music volume"
              style={{ flex: 1, accentColor: "#a855f7", height: "4px" }}
            />
            <span style={{ fontSize: "0.7rem" }}>🔊</span>
          </div>

          {autoplayBlocked && (
            <div style={{ textAlign: "center", marginTop: "0.65rem", fontSize: "0.6rem", color: "rgba(255,255,255,0.4)" }}>
              🎵 Tap anywhere to start the song
            </div>
          )}
        </div>
      )}

      <style>{`@keyframes pulseRing{0%,100%{transform:scale(1);opacity:0.6}50%{transform:scale(1.3);opacity:0.2}}`}</style>
    </div>
  );
}

// ══════════════════════════════════════════════════════
// 📸 PHOTO GALLERY
// ══════════════════════════════════════════════════════
function PhotoGallery() {
  const [lightbox, setLightbox] = useState(null);
  const [captions, setCaptions] = useState({});
  const [editingCaption, setEditingCaption] = useState(null);
  const [tempCaption, setTempCaption] = useState("");
  const [isMobile] = useState(() => window.innerWidth < 600);

  if (photos.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "3rem 1.5rem", border: "2px dashed rgba(192,132,252,0.3)", borderRadius: "20px", background: "rgba(147,51,234,0.06)" }}>
        <div style={{ fontSize: "3rem", opacity: 0.5, marginBottom: "1rem" }}>📸</div>
        <div style={{ color: "rgba(252,231,243,0.6)", lineHeight: 1.7 }}>
          <div style={{ fontSize: "1rem", marginBottom: "0.4rem" }}>Add photos to the <code style={{ background: "rgba(255,255,255,0.1)", padding: "0.1rem 0.4rem", borderRadius: "4px" }}>/photos</code> folder</div>
          <div style={{ fontSize: "0.8rem", opacity: 0.6 }}>Then list the filenames in <code style={{ background: "rgba(255,255,255,0.1)", padding: "0.1rem 0.4rem", borderRadius: "4px" }}>photoFiles</code> at the top of the file</div>
        </div>
      </div>
    );
  }

  const currentIdx = lightbox !== null ? photos.findIndex(p => p.id === lightbox) : -1;

  const saveCaption = (id) => {
    setCaptions(prev => ({ ...prev, [id]: tempCaption }));
    setEditingCaption(null);
    setTempCaption("");
  };

  return (
    <div>
      <div style={{ columns: isMobile ? "2 120px" : "3 180px", gap: "0.6rem", marginBottom: "1rem" }}>
        {photos.map(photo => (
          <div key={photo.id} onClick={() => setLightbox(photo.id)} style={{ breakInside: "avoid", marginBottom: "0.6rem", borderRadius: "12px", overflow: "hidden", position: "relative", cursor: "pointer", border: "1px solid rgba(192,132,252,0.2)", animation: "fadeIn 0.5s ease" }}>
            <img src={photo.src} alt="" style={{ width: "100%", display: "block", transition: "transform 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
            {(captions[photo.id] || photo.caption) && (
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent,rgba(0,0,0,0.75))", padding: "0.5rem 0.6rem 0.4rem", fontSize: "0.72rem", color: "rgba(252,231,243,0.85)", fontStyle: "italic" }}>
                {captions[photo.id] || photo.caption}
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
        {photos.length} photo{photos.length !== 1 ? "s" : ""} · tap any to enlarge
      </div>

      {lightbox !== null && currentIdx !== -1 && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 9000, display: "flex", alignItems: "center", justifyContent: "center", animation: "fadeIn 0.25s ease", backdropFilter: "blur(8px)" }} onClick={() => setLightbox(null)}>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: "95vw", maxHeight: "90vh", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem" }}>
            <img src={photos[currentIdx].src} alt="" style={{ maxWidth: "100%", maxHeight: "65vh", objectFit: "contain", borderRadius: "12px" }} />
            {editingCaption === photos[currentIdx].id ? (
              <div style={{ display: "flex", gap: "0.5rem", width: "min(500px,90vw)" }}>
                <input autoFocus value={tempCaption} onChange={e => setTempCaption(e.target.value)} onKeyDown={e => e.key === "Enter" && saveCaption(photos[currentIdx].id)} placeholder="Add a caption…" style={{ flex: 1, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(192,132,252,0.4)", borderRadius: "8px", padding: "0.5rem 0.75rem", color: "#fff", fontSize: "0.85rem", outline: "none" }} />
                <button onClick={() => saveCaption(photos[currentIdx].id)} style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)", color: "#fff", border: "none", borderRadius: "8px", padding: "0.5rem 1rem", cursor: "pointer", fontSize: "0.82rem" }}>Save</button>
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <button onClick={() => { setEditingCaption(photos[currentIdx].id); setTempCaption(captions[photos[currentIdx].id] || photos[currentIdx].caption || ""); }} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", borderRadius: "8px", padding: "0.4rem 0.9rem", cursor: "pointer", fontSize: "0.78rem" }}>
                  {captions[photos[currentIdx].id] || photos[currentIdx].caption ? "✏️ Edit caption" : "➕ Add caption"}
                </button>
              </div>
            )}
            {(captions[photos[currentIdx].id] || photos[currentIdx].caption) && editingCaption !== photos[currentIdx].id && (
              <div style={{ color: "rgba(252,231,243,0.7)", fontStyle: "italic", fontSize: "0.88rem", maxWidth: "500px", textAlign: "center" }}>
                "{captions[photos[currentIdx].id] || photos[currentIdx].caption}"
              </div>
            )}
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <button onClick={() => setLightbox(photos[(currentIdx - 1 + photos.length) % photos.length].id)} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", fontSize: "1.1rem" }}>←</button>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>{currentIdx + 1} / {photos.length}</span>
              <button onClick={() => setLightbox(photos[(currentIdx + 1) % photos.length].id)} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", fontSize: "1.1rem" }}>→</button>
            </div>
          </div>
          <button onClick={() => setLightbox(null)} style={{ position: "fixed", top: "0.75rem", right: "0.75rem", background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", fontSize: "1.2rem", zIndex: 9001 }}>×</button>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════
// ⏳ AGE COUNTER
// ══════════════════════════════════════════════════════
function AgeCounter() {
  const [elapsed, setElapsed] = useState({});

  useEffect(() => {
    const birth = new Date("2004-09-15T00:00:00");
    const calc = () => {
      const now = new Date();
      const diffMs = now - birth;
      const totalSecs = Math.floor(diffMs / 1000);
      const years = now.getFullYear() - birth.getFullYear() -
        (now < new Date(now.getFullYear(), birth.getMonth(), birth.getDate()) ? 1 : 0);
      return {
        years,
        days: Math.floor(diffMs / 86400000),
        hours: Math.floor(diffMs / 3600000),
        minutes: Math.floor(diffMs / 60000),
        seconds: totalSecs,
        heartbeats: Math.floor(totalSecs * 1.2),
        breaths: Math.floor(totalSecs / 4),
      };
    };
    setElapsed(calc());
    const t = setInterval(() => setElapsed(calc()), 1000);
    return () => clearInterval(t);
  }, []);

  const fmt = (n) => (n || 0).toLocaleString();

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "1.5rem", color: "rgba(252,231,243,0.7)", fontSize: "0.9rem", fontStyle: "italic", lineHeight: 1.7 }}>
        The world has been better for exactly this long because you're in it.
      </div>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "clamp(4rem,18vw,9rem)", fontFamily: "Georgia,serif", fontWeight: "300", lineHeight: 1, background: "linear-gradient(135deg,#fbbf24,#f9a8d4,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 40px rgba(249,168,212,0.3))" }}>
          {elapsed.years}
        </div>
        <div style={{ color: "#f9a8d4", fontSize: "clamp(0.9rem,2.5vw,1.1rem)", fontFamily: "Georgia,serif", marginTop: "0.25rem" }}>years of being wonderful ✨</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "0.6rem" }}>
        {[
          { label: "Days", value: fmt(elapsed.days), emoji: "🌙" },
          { label: "Hours", value: fmt(elapsed.hours), emoji: "⏰" },
          { label: "Minutes", value: fmt(elapsed.minutes), emoji: "⌚" },
          { label: "Seconds", value: fmt(elapsed.seconds), emoji: "💫" },
          { label: "Heartbeats ♡", value: fmt(elapsed.heartbeats), emoji: "💗" },
          { label: "Breaths taken", value: fmt(elapsed.breaths), emoji: "🌬️" },
        ].map((s, i) => (
          <div key={i} style={{ background: "rgba(147,51,234,0.1)", border: "1px solid rgba(192,132,252,0.2)", borderRadius: "14px", padding: "0.85rem 0.6rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.3rem", marginBottom: "0.25rem" }}>{s.emoji}</div>
            <div style={{ fontFamily: "Georgia,serif", fontSize: "clamp(0.85rem,2.5vw,1.1rem)", color: "#e9d5ff", lineHeight: 1, marginBottom: "0.2rem", wordBreak: "break-all" }}>{s.value}</div>
            <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "1.25rem", textAlign: "center", color: "rgba(252,231,243,0.45)", fontSize: "0.78rem", fontStyle: "italic" }}>
        …and every single second is a gift to everyone who knows you ❤️
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════
// 🌌 PARTICLES
// ══════════════════════════════════════════════════════
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 0.5, dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.6 + 0.1, type: Math.random() > 0.85 ? "heart" : "star",
      twinkle: Math.random() * Math.PI * 2, twinkleSpeed: Math.random() * 0.03 + 0.01,
    }));
    const shootingStars = [];
    const shootInterval = setInterval(() => {
      if (shootingStars.length < 3) shootingStars.push({ x: Math.random() * canvas.width * 0.6, y: Math.random() * canvas.height * 0.4, len: 0, maxLen: 120 + Math.random() * 80, speed: 6 + Math.random() * 4, angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3, alpha: 1 });
    }, 3500);
    const drawHeart = (cx, cy, size, alpha) => {
      ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = "#e8a0b4";
      const s = size * 0.6;
      ctx.beginPath();
      ctx.moveTo(cx, cy + s * 0.4);
      ctx.bezierCurveTo(cx, cy, cx - s, cy, cx - s, cy - s * 0.5);
      ctx.bezierCurveTo(cx - s, cy - s, cx, cy - s, cx, cy - s * 0.5);
      ctx.bezierCurveTo(cx, cy - s, cx + s, cy - s, cx + s, cy - s * 0.5);
      ctx.bezierCurveTo(cx + s, cy, cx, cy, cx, cy + s * 0.4);
      ctx.fill(); ctx.restore();
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.dx; p.y += p.dy; p.twinkle += p.twinkleSpeed;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        const tw = (Math.sin(p.twinkle) + 1) / 2;
        const alpha = p.opacity * (0.4 + tw * 0.6);
        if (p.type === "heart") drawHeart(p.x, p.y, p.r * 3, alpha * 0.5);
        else {
          ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = tw > 0.7 ? "#f8d5e0" : "#c4a0d0";
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); ctx.restore();
        }
      });
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.len = Math.min(s.len + s.speed, s.maxLen);
        const ex = s.x + Math.cos(s.angle) * s.len, ey = s.y + Math.sin(s.angle) * s.len;
        const grad = ctx.createLinearGradient(s.x, s.y, ex, ey);
        grad.addColorStop(0, `rgba(255,220,230,0)`); grad.addColorStop(1, `rgba(255,220,230,${s.alpha * 0.8})`);
        ctx.beginPath(); ctx.strokeStyle = grad; ctx.lineWidth = 1.5;
        ctx.moveTo(s.x, s.y); ctx.lineTo(ex, ey); ctx.stroke();
        if (s.len >= s.maxLen) { s.alpha -= 0.05; if (s.alpha <= 0) shootingStars.splice(i, 1); }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(animId); clearInterval(shootInterval); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 0 }} />;
}

// ══════════════════════════════════════════════════════
// 💖 CONFETTI
// ══════════════════════════════════════════════════════
function Confetti({ active }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const pieces = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width, y: -20,
      r: Math.random() * 9 + 4,
      color: ["#f472b6","#a78bfa","#fbbf24","#34d399","#fb7185","#c084fc","#fcd34d","#f9a8d4"][Math.floor(Math.random() * 8)],
      vx: (Math.random() - 0.5) * 7, vy: Math.random() * 4 + 2,
      rot: Math.random() * 360, rotV: (Math.random() - 0.5) * 6,
      shape: Math.random() > 0.5 ? "rect" : "circle",
    }));
    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.rot += p.rotV; p.vy += 0.1;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180); ctx.fillStyle = p.color;
        if (p.shape === "rect") ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r);
        else { ctx.beginPath(); ctx.arc(0, 0, p.r / 2, 0, Math.PI * 2); ctx.fill(); }
        ctx.restore();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    const t = setTimeout(() => cancelAnimationFrame(animId), 5000);
    return () => { cancelAnimationFrame(animId); clearTimeout(t); };
  }, [active]);
  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999, width: "100%", height: "100%" }} />;
}

// ══════════════════════════════════════════════════════
// 🎮 MINI GAME — FULLY FIXED (mouse + touch + mobile)
// ══════════════════════════════════════════════════════
function MiniGame() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [phase, setPhase] = useState("start");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [highScore, setHighScore] = useState(0);
  const stateRef = useRef({ running: false, basket: 150, score: 0, combo: 1, lastCatch: 0, hearts: [] });
  const animRef = useRef(null);
  const timerRef = useRef(null);
  const elapsedRef = useRef(0);
  const spawnRef = useRef(null);

  // Responsive canvas: fill container width
  const [canvasSize, setCanvasSize] = useState({ w: 320, h: 280 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const w = Math.min(containerRef.current.offsetWidth - 8, 480);
        setCanvasSize({ w, h: Math.max(240, Math.round(w * 0.75)) });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const { w: CW, h: CH } = canvasSize;
  const BASKET_W = Math.round(CW * 0.25);

  const spawnHeart = () => {
    const st = stateRef.current;
    if (!st.running) return;
    st.hearts.push({
      x: 20 + Math.random() * (CW - 40),
      y: -20,
      vy: (2 + elapsedRef.current * 0.04 + Math.random() * 1.5) * (CW / 320),
      size: (12 + Math.random() * 10) * (CW / 320),
      color: ["#f472b6","#fb7185","#e879f9","#a78bfa"][Math.floor(Math.random() * 4)],
    });
    if (st.running) {
      spawnRef.current = setTimeout(spawnHeart, Math.max(380, 950 - elapsedRef.current * 12));
    }
  };

  const endGame = () => {
    const st = stateRef.current;
    st.running = false;
    clearInterval(timerRef.current);
    cancelAnimationFrame(animRef.current);
    clearTimeout(spawnRef.current);
    const final = st.score;
    setHighScore(h => Math.max(h, final));
    setScore(final);
    setPhase("end");
  };

  const startGame = () => {
    const st = stateRef.current;
    st.hearts = [];
    st.score = 0;
    st.combo = 1;
    st.lastCatch = 0;
    st.basket = CW / 2 - BASKET_W / 2;
    st.running = true;
    elapsedRef.current = 0;
    setScore(0);
    setTimeLeft(30);
    setPhase("playing");

    timerRef.current = setInterval(() => {
      elapsedRef.current++;
      setTimeLeft(t => {
        if (t <= 1) { endGame(); return 0; }
        return t - 1;
      });
    }, 1000);

    spawnHeart();

    const loop = () => {
      if (!st.running) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, CW, CH);

      // Background
      ctx.fillStyle = "rgba(20,0,40,0.6)";
      ctx.fillRect(0, 0, CW, CH);

      const bx = st.basket, bw = BASKET_W, by = CH - 48;

      // Basket
      ctx.save();
      ctx.fillStyle = "rgba(248,180,200,0.18)";
      ctx.strokeStyle = "#f472b6";
      ctx.lineWidth = 2;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(bx, by, bw, 20, 6);
      else { ctx.rect(bx, by, bw, 20); }
      ctx.fill();
      ctx.stroke();
      ctx.font = `${Math.round(CW * 0.065)}px serif`;
      ctx.textAlign = "center";
      ctx.fillText("🧺", bx + bw / 2, by + 17);
      ctx.restore();

      // Combo label
      if (st.combo > 1) {
        ctx.save();
        ctx.fillStyle = "#fbbf24";
        ctx.font = `bold ${Math.round(CW * 0.038)}px sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(`x${st.combo} COMBO!`, bx + bw / 2, by - 8);
        ctx.restore();
      }

      // Hearts
      const surviving = [];
      for (const h of st.hearts) {
        h.y += h.vy;
        const caught = h.y + h.size > by && h.y < by + 20 && h.x > bx - 10 && h.x < bx + bw + 10;
        if (caught) {
          const now = Date.now();
          st.combo = now - st.lastCatch < 900 ? st.combo + 1 : 1;
          st.lastCatch = now;
          st.score += st.combo;
          setScore(st.score);
          continue;
        }
        if (h.y > CH + 30) continue;
        surviving.push(h);

        ctx.save();
        ctx.fillStyle = h.color;
        ctx.globalAlpha = 0.9;
        const s = h.size;
        ctx.beginPath();
        ctx.moveTo(h.x, h.y + s * 0.4);
        ctx.bezierCurveTo(h.x, h.y, h.x - s, h.y, h.x - s, h.y - s * 0.5);
        ctx.bezierCurveTo(h.x - s, h.y - s, h.x, h.y - s, h.x, h.y - s * 0.5);
        ctx.bezierCurveTo(h.x, h.y - s, h.x + s, h.y - s, h.x + s, h.y - s * 0.5);
        ctx.bezierCurveTo(h.x + s, h.y, h.x, h.y, h.x, h.y + s * 0.4);
        ctx.fill();
        ctx.restore();
      }
      st.hearts = surviving;

      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      cancelAnimationFrame(animRef.current);
      clearTimeout(spawnRef.current);
      stateRef.current.running = false;
    };
  }, []);

  // Mouse + touch controls
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const getX = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = CW / rect.width;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      return (clientX - rect.left) * scaleX;
    };
    const onMove = e => {
      e.preventDefault();
      stateRef.current.basket = Math.max(0, Math.min(CW - BASKET_W, getX(e) - BASKET_W / 2));
    };
    const onKey = e => {
      const step = Math.round(CW * 0.07);
      if (e.key === "ArrowLeft") stateRef.current.basket = Math.max(0, stateRef.current.basket - step);
      if (e.key === "ArrowRight") stateRef.current.basket = Math.min(CW - BASKET_W, stateRef.current.basket + step);
    };
    canvas.addEventListener("mousemove", onMove, { passive: false });
    canvas.addEventListener("touchmove", onMove, { passive: false });
    canvas.addEventListener("touchstart", onMove, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("touchmove", onMove);
      canvas.removeEventListener("touchstart", onMove);
      window.removeEventListener("keydown", onKey);
    };
  }, [CW, BASKET_W]);

  // Draw idle state
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || phase === "playing") return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, CW, CH);
    ctx.fillStyle = "rgba(20,0,40,0.6)";
    ctx.fillRect(0, 0, CW, CH);
  }, [phase, CW, CH]);

  return (
    <div ref={containerRef} style={{ padding: "1.25rem 1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", boxShadow: "0 0 30px rgba(147,51,234,0.2)", width: "100%", maxWidth: `${CW}px` }}>
        <canvas
          ref={canvasRef}
          width={CW}
          height={CH}
          style={{ display: "block", width: "100%", touchAction: "none", cursor: "crosshair" }}
        />
        {phase !== "playing" && (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", background: "rgba(10,0,20,0.75)", backdropFilter: "blur(4px)", padding: "1rem" }}>
            {phase === "end" ? (
              <>
                <div style={{ fontSize: "1.4rem", color: "#fbbf24" }}>🎉 Time's up!</div>
                <div style={{ color: "#fce7f3", textAlign: "center" }}>Score: <b style={{ color: "#f9a8d4", fontSize: "1.2rem" }}>{score}</b></div>
                {highScore > 0 && <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>Best: {highScore}</div>}
                <button onClick={startGame} style={{ background: "linear-gradient(135deg,#9333ea,#ec4899)", color: "#fff", border: "none", padding: "0.75rem 2rem", borderRadius: "50px", cursor: "pointer", fontWeight: "600", fontSize: "0.95rem", minHeight: "48px" }}>Play Again ↺</button>
              </>
            ) : (
              <>
                <div style={{ fontSize: "2.2rem" }}>💖</div>
                <div style={{ color: "#fce7f3", textAlign: "center", lineHeight: 1.6, fontSize: "0.88rem" }}>
                  Catch the falling hearts!<br />
                  <span style={{ opacity: 0.55, fontSize: "0.75rem" }}>Drag finger · mouse · or ← → keys</span>
                </div>
                <button onClick={startGame} style={{ background: "linear-gradient(135deg,#9333ea,#ec4899)", color: "#fff", border: "none", padding: "0.75rem 2rem", borderRadius: "50px", cursor: "pointer", fontWeight: "600", fontSize: "0.95rem", minHeight: "48px" }}>Start Game ▶</button>
              </>
            )}
          </div>
        )}
      </div>
      {phase === "playing" && (
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: `${CW}px`, padding: "0.5rem 0.25rem 0", color: "rgba(255,255,255,0.7)", fontSize: "0.88rem" }}>
          <span>💖 <b style={{ color: "#f9a8d4" }}>{score}</b></span>
          <span>⏱ {timeLeft}s</span>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════
// 🎂 BIRTHDAY CAKE — FULLY FIXED
// ══════════════════════════════════════════════════════
function BirthdayCake({ onWish }) {
  const [flames, setFlames] = useState([true, true, true, true, true]);
  const [blown, setBlown] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [cut, setCut] = useState(false);
  const [flicker, setFlicker] = useState([8, 9, 7, 10, 8]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const t = setInterval(() => setFlicker(Array.from({ length: 5 }, () => 7 + Math.random() * 4)), 100);
    return () => clearInterval(t);
  }, []);

  // Particle burst when cake is cut
  useEffect(() => {
    if (!cut) return;
    const ps = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 50 + (Math.random() - 0.5) * 20,
      emoji: ["🎊","🎉","✨","💖","🌸"][i % 5],
      delay: Math.random() * 0.5,
    }));
    setParticles(ps);
    const t = setTimeout(() => setParticles([]), 3000);
    return () => clearTimeout(t);
  }, [cut]);

  const blowOut = () => {
    if (blown) return;
    const order = [2, 0, 4, 1, 3];
    order.forEach((ci, j) => setTimeout(() => setFlames(f => { const nf = [...f]; nf[ci] = false; return nf; }), j * 220));
    setTimeout(() => { setBlown(true); setShowWish(true); onWish(); }, 1200);
  };

  // SVG viewBox: 0 0 260 200. Candle x positions.
  const candleX = [72, 102, 128, 154, 180];
  const candleColors = ["#f472b6","#a78bfa","#fbbf24","#34d399","#fb7185"];
  const waxColors    = ["#f9a8d4","#ddd6fe","#fde68a","#a7f3d0","#fca5a5"];

  return (
    <div style={{ textAlign: "center" }}>
      {/* Floating particles */}
      {particles.map(p => (
        <span key={p.id} style={{ position: "absolute", left: `${p.x}%`, fontSize: "1.4rem", animation: `floatUp 2.5s ease ${p.delay}s forwards`, pointerEvents: "none" }}>
          {p.emoji}
        </span>
      ))}

      <div style={{ position: "relative", display: "inline-block" }}>
        <svg
          viewBox="0 0 260 200"
          style={{ width: "100%", maxWidth: "280px", overflow: "visible", display: "block", margin: "0 auto" }}
        >
          <defs>
            <linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
            <linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fce7f3" />
              <stop offset="100%" stopColor="#f9a8d4" />
            </linearGradient>
            <linearGradient id="cg3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          {/* ── Bottom tier ── */}
          <rect x="20" y="128" width="220" height="57" rx="10" fill="url(#cg1)" />
          {/* Side shadow */}
          <rect x="20" y="128" width="10" height="57" rx="10" fill="rgba(0,0,0,0.12)" />
          {/* Frosting drips */}
          {[40, 70, 100, 130, 160, 190].map((x, i) => (
            <ellipse key={i} cx={x} cy="128" rx="10" ry="7" fill="rgba(255,255,255,0.38)" />
          ))}
          {/* Bottom frosting border */}
          <rect x="20" y="175" width="220" height="10" rx="5" fill="rgba(255,255,255,0.2)" />
          {/* Cake text */}
          <text x="130" y="162" textAnchor="middle" fill="white" fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">
            Happy Birthday! 🎂
          </text>
          {/* Sprinkles */}
          {[[55,145],[90,138],[150,150],[185,140],[120,155],[70,158],[200,148]].map(([sx,sy],i)=>(
            <rect key={i} x={sx} y={sy} width="6" height="2.5" rx="1"
              fill={["#fbbf24","#34d399","#f472b6","#a78bfa","#fb7185"][i%5]}
              transform={`rotate(${i*30},${sx+3},${sy+1})`} opacity="0.85" />
          ))}

          {/* ── Top tier ── */}
          <rect x="45" y="98" width="170" height="35" rx="8" fill="url(#cg2)" />
          {/* Plate shine */}
          <rect x="55" y="103" width="150" height="6" rx="3" fill="rgba(255,255,255,0.55)" />
          {/* Top tier frosting drips */}
          {[65,90,115,140,165,190].map((x, i) => (
            <ellipse key={i} cx={x} cy="98" rx="7" ry="5" fill="rgba(255,255,255,0.35)" />
          ))}

          {/* ── Decorative hearts on cake ── */}
          {[75,140,200].map((hx,i) => (
            <text key={i} x={hx} y="150" fontSize="10" textAnchor="middle" opacity="0.6">❤️</text>
          ))}

          {/* ── Plate / base ── */}
          <ellipse cx="130" cy="185" rx="115" ry="9" fill="rgba(255,255,255,0.12)" />

          {/* ── Candles ── */}
          {candleX.map((cx, i) => (
            <g key={i}>
              {/* Candle body */}
              <rect x={cx - 5} y="70" width="10" height="30" rx="4" fill={candleColors[i]} />
              {/* Candle stripe */}
              <rect x={cx - 5} y="78" width="10" height="4" rx="1" fill="rgba(255,255,255,0.3)" />
              {/* Wax drip */}
              <ellipse cx={cx} cy="99" rx="5" ry="3" fill={waxColors[i]} opacity="0.75" />

              {/* Flame or smoke */}
              {flames[i] ? (
                <g>
                  {/* Glow */}
                  <ellipse cx={cx} cy={62} rx="8" ry="10" fill={candleColors[i]} opacity="0.12" />
                  {/* Outer flame */}
                  <ellipse cx={cx} cy={67 - flicker[i] * 0.3} rx="5" ry={flicker[i] * 0.6} fill="#fb923c" opacity="0.92" />
                  {/* Inner flame */}
                  <ellipse cx={cx} cy={68 - flicker[i] * 0.25} rx="3" ry={flicker[i] * 0.45} fill="#fbbf24" />
                  {/* Core */}
                  <ellipse cx={cx} cy={70 - flicker[i] * 0.2} rx="1.5" ry={flicker[i] * 0.3} fill="#fff7ed" />
                </g>
              ) : (
                <text x={cx} y="67" textAnchor="middle" fontSize="10">💨</text>
              )}
            </g>
          ))}

          {/* Cut slice overlay */}
          {cut && (
            <g style={{ animation: "fadeIn 0.5s ease" }}>
              <polygon points="130,98 155,185 105,185" fill="url(#cg1)" opacity="0.85" />
              <polygon points="130,98 155,185 105,185" fill="rgba(255,255,255,0.08)" />
              <line x1="130" y1="98" x2="155" y2="185" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
              <line x1="130" y1="98" x2="105" y2="185" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            </g>
          )}
        </svg>
      </div>

      {!blown ? (
        <div style={{ marginTop: "1.5rem" }}>
          <p style={{ color: "rgba(252,231,243,0.65)", fontSize: "0.88rem", fontStyle: "italic", marginBottom: "1rem" }}>
            All 5 candles are lit just for you ✨
          </p>
          <button
            onClick={blowOut}
            style={{ background: "linear-gradient(135deg,#9333ea,#ec4899)", color: "#fff", border: "none", padding: "0.9rem 2.5rem", borderRadius: "50px", fontSize: "1rem", cursor: "pointer", fontWeight: "600", boxShadow: "0 0 20px rgba(147,51,234,0.5)", transition: "transform 0.2s", minHeight: "52px" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
            Blow Out Candles 🕯️
          </button>
        </div>
      ) : (
        <div style={{ marginTop: "1.5rem", animation: "fadeIn 0.6s ease" }}>
          {showWish && (
            <div style={{ color: "#f8d5e0", fontStyle: "italic", fontSize: "1rem", marginBottom: "1.25rem", fontFamily: "Georgia,serif", lineHeight: 1.7, maxWidth: "340px", margin: "0 auto 1.25rem" }}>
              "I hope every wish you make today finds its way to you. ❤️"
            </div>
          )}
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "0.75rem", fontSize: "0.88rem" }}>Now… cut the cake! 🎂</p>
          <button
            onClick={() => !cut && setCut(true)}
            style={{ background: cut ? "linear-gradient(135deg,#9333ea,#ec4899)" : "rgba(147,51,234,0.3)", color: cut ? "#fff" : "#c084fc", border: "1px solid rgba(192,132,252,0.5)", padding: "0.75rem 2rem", borderRadius: "50px", fontSize: "0.95rem", cursor: cut ? "default" : "pointer", transition: "all 0.4s", fontWeight: cut ? "600" : "400", minHeight: "48px" }}>
            {cut ? "🎉 Happy Birthday, Mahima!" : "Cut the Cake 🔪"}
          </button>
          {cut && (
            <div style={{ marginTop: "1rem", animation: "fadeIn 0.8s ease" }}>
              <p style={{ color: "rgba(252,231,243,0.5)", fontSize: "0.8rem", fontStyle: "italic" }}>
                Wishing you all the sweetness in the world 🍰
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════
// 🎁 GIFT BOX
// ══════════════════════════════════════════════════════
function GiftBox({ onOpen }) {
  const [state, setState] = useState("closed");
  const open = () => { setState("opening"); setTimeout(() => { setState("open"); onOpen(); }, 800); };
  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ color: "rgba(255,255,255,0.7)", fontStyle: "italic", marginBottom: "1.5rem", fontSize: "0.95rem" }}>I have one more surprise…</p>
      <div style={{ display: "inline-block", cursor: state === "closed" ? "pointer" : "default", transition: "transform 0.3s", transform: state === "opening" ? "scale(1.1)" : "scale(1)" }} onClick={state === "closed" ? open : undefined}>
        <div style={{ fontSize: "5rem", filter: "drop-shadow(0 0 20px rgba(249,168,212,0.6))", animation: state === "closed" ? "giftPulse 2s ease-in-out infinite" : "none" }}>
          {state === "open" ? "✨" : "🎁"}
        </div>
      </div>
      {state === "closed" && (
        <div style={{ marginTop: "1.5rem" }}>
          <button onClick={open} style={{ background: "linear-gradient(135deg,#9333ea,#ec4899)", color: "#fff", border: "none", padding: "0.9rem 2.5rem", borderRadius: "50px", fontSize: "1rem", cursor: "pointer", fontWeight: "600", boxShadow: "0 0 20px rgba(236,72,153,0.5)", minHeight: "52px" }}>
            Open Your Gift 🎁
          </button>
        </div>
      )}
      {state === "open" && (
        <div style={{ animation: "fadeIn 1s ease", marginTop: "1.5rem" }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#fbbf24" }}>Surprise! ❤️</div>
          <div style={{ background: "rgba(147,51,234,0.15)", border: "1px solid rgba(192,132,252,0.3)", borderRadius: "16px", padding: "1.25rem", maxWidth: "400px", margin: "0 auto", color: "#f8d5e0", lineHeight: 1.7, fontStyle: "italic", fontSize: "0.95rem" }}>
            {config.giftReveal}
          </div>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════
// 💌 OPEN WHEN
// ══════════════════════════════════════════════════════
function OpenWhen() {
  const [open, setOpen] = useState(null);
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))", gap: "0.75rem", marginBottom: "1.25rem" }}>
        {config.openWhen.map((item, i) => (
          <div key={i} onClick={() => setOpen(open === i ? null : i)} style={{ background: open === i ? "rgba(147,51,234,0.3)" : "rgba(147,51,234,0.1)", border: `1px solid rgba(192,132,252,${open === i ? 0.6 : 0.3})`, borderRadius: "12px", padding: "1rem 0.75rem", cursor: "pointer", textAlign: "center", transition: "all 0.3s", transform: open === i ? "scale(1.03)" : "scale(1)", minHeight: "90px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.4rem" }}>
            <div style={{ fontSize: "1.7rem" }}>{item.emoji}</div>
            <div style={{ color: open === i ? "#e9d5ff" : "#c084fc", fontSize: "0.78rem", lineHeight: 1.3 }}>Open when {item.label}</div>
          </div>
        ))}
      </div>
      {open !== null && (
        <div style={{ background: "rgba(30,10,50,0.8)", border: "1px solid rgba(192,132,252,0.4)", borderRadius: "16px", padding: "1.25rem 1.5rem", animation: "fadeIn 0.4s ease", maxWidth: "500px", margin: "0 auto" }}>
          <div style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>{config.openWhen[open].emoji}</div>
          <div style={{ color: "#f8d5e0", lineHeight: 1.8, fontStyle: "italic", fontFamily: "Georgia,serif", fontSize: "0.95rem" }}>{config.openWhen[open].message}</div>
          <div style={{ marginTop: "1rem", color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>— with love, {config.yourName} ❤️</div>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════
// 💖 REASONS CARD
// ══════════════════════════════════════════════════════
function ReasonsCard() {
  const [current, setCurrent] = useState(null);
  const [shown, setShown] = useState(new Set());
  const [flipped, setFlipped] = useState(false);
  const [count, setCount] = useState(0);
  const reveal = () => {
    setFlipped(false);
    setTimeout(() => {
      const unused = config.reasons.map((_, i) => i).filter(i => !shown.has(i));
      const pool = unused.length === 0 ? config.reasons.map((_, i) => i) : unused;
      if (unused.length === 0) setShown(new Set());
      const idx = pool[Math.floor(Math.random() * pool.length)];
      setShown(s => new Set([...s, idx]));
      setCurrent(idx);
      setCount(c => c + 1);
      setTimeout(() => setFlipped(true), 100);
    }, 150);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ perspective: "1000px", width: "min(280px, 90vw)", height: "160px", margin: "0 auto 1.5rem" }}>
        <div style={{ position: "relative", width: "100%", height: "100%", transition: "transform 0.6s", transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
          <div style={{ position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden", background: "linear-gradient(135deg,rgba(147,51,234,0.3),rgba(236,72,153,0.3))", border: "1px solid rgba(192,132,252,0.4)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "3rem" }}>❤️</span>
          </div>
          <div style={{ position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "linear-gradient(135deg,rgba(147,51,234,0.4),rgba(236,72,153,0.4))", border: "1px solid rgba(249,168,212,0.5)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.25rem" }}>
            <p style={{ color: "#fce7f3", fontSize: "0.95rem", fontStyle: "italic", lineHeight: 1.6, margin: 0, fontFamily: "Georgia,serif" }}>{current !== null ? config.reasons[current] : ""}</p>
          </div>
        </div>
      </div>
      {count > 0 && <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginBottom: "1rem" }}>Reason #{count} of {config.reasons.length}</p>}
      <button onClick={reveal} style={{ background: "linear-gradient(135deg,#9333ea,#ec4899)", color: "#fff", border: "none", padding: "0.9rem 2.5rem", borderRadius: "50px", fontSize: "1rem", cursor: "pointer", fontWeight: "600", boxShadow: "0 0 20px rgba(147,51,234,0.4)", transition: "transform 0.2s", minHeight: "52px" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
        Give Me A Reason ❤️
      </button>
    </div>
  );
}

// ══════════════════════════════════════════════════════
// 🌌 FUTURE CARDS
// ══════════════════════════════════════════════════════
function FutureSection() {
  const [active, setActive] = useState(null);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))", gap: "0.85rem" }}>
      {config.future.map((item, i) => (
        <div key={i} onClick={() => setActive(active === i ? null : i)} style={{ background: active === i ? "rgba(147,51,234,0.35)" : "rgba(147,51,234,0.12)", border: `1px solid rgba(192,132,252,${active === i ? 0.6 : 0.25})`, borderRadius: "14px", padding: "1.1rem 0.85rem", cursor: "pointer", textAlign: "center", transition: "all 0.3s", transform: active === i ? "translateY(-4px)" : "translateY(0)", minHeight: "100px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.4rem" }}>
          <div style={{ fontSize: "1.8rem" }}>{item.emoji}</div>
          <div style={{ color: "#e9d5ff", fontSize: "0.8rem", lineHeight: 1.4 }}>{item.dream}</div>
          {active === i && <div style={{ marginTop: "0.3rem", color: "#fbbf24", fontSize: "0.72rem" }}>Can't wait ✨</div>}
        </div>
      ))}
    </div>
  );
}

// ══════════════════════════════════════════════════════
// ⌨️ TYPEWRITER
// ══════════════════════════════════════════════════════
function Typewriter({ text, speed = 40, onDone }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0; setDisplayed(""); setDone(false);
    const t = setInterval(() => {
      if (i < text.length) { setDisplayed(text.slice(0, i + 1)); i++; }
      else { clearInterval(t); setDone(true); onDone && onDone(); }
    }, speed);
    return () => clearInterval(t);
  }, [text]);
  return <span>{displayed}{!done && <span style={{ animation: "blink 0.8s step-end infinite" }}>|</span>}</span>;
}

// ══════════════════════════════════════════════════════
// 📜 SECTION
// ══════════════════════════════════════════════════════
function Section({ title, emoji, children, style: extraStyle }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} style={{ padding: "clamp(2.5rem,6vw,4rem) clamp(1rem,4vw,1.5rem)", maxWidth: "760px", margin: "0 auto", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease,transform 0.8s ease", ...extraStyle }}>
      {title && (
        <h2 style={{ textAlign: "center", color: "#fce7f3", fontFamily: "Georgia,serif", fontSize: "clamp(1.2rem,4.5vw,2rem)", fontWeight: "400", marginBottom: "2rem", textShadow: "0 0 20px rgba(249,168,212,0.4)" }}>
          {emoji} {title}
        </h2>
      )}
      {children}
    </section>
  );
}

// ══════════════════════════════════════════════════════
// 🌹 FINAL REVEAL
// ══════════════════════════════════════════════════════
function FinalReveal({ name, yourName, onConfetti }) {
  const [step, setStep] = useState(0);
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [hearts, setHearts] = useState([]);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !vis) setVis(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!vis) return;
    [0, 1200, 2600, 4200, 5500, 7000].forEach((delay, i) => setTimeout(() => setStep(i + 1), delay));
    const ct = setTimeout(() => { onConfetti(); setHearts(Array.from({ length: 12 }, (_, i) => ({ id: i, x: 20 + Math.random() * 60, delay: Math.random() * 1.5, size: 1 + Math.random() * 1.5 }))); setTimeout(() => setHearts([]), 4000); }, 5200);
    return () => clearTimeout(ct);
  }, [vis]);
  const lines = [
    { text: "If I could give you one thing today…", style: { color: "rgba(252,231,243,0.8)", fontStyle: "italic" } },
    { text: "I would give you the ability", style: { color: "#fce7f3", fontSize: "clamp(1rem,3vw,1.2rem)" } },
    { text: "to see yourself through my eyes.", style: { color: "#f9a8d4", fontSize: "clamp(1rem,3vw,1.2rem)", fontFamily: "Georgia,serif" } },
    { text: "Because maybe then you'd understand just how incredibly special you are to me.", style: { color: "rgba(252,231,243,0.8)", fontStyle: "italic", fontSize: "clamp(0.88rem,2.5vw,0.95rem)" } },
  ];
  return (
    <div ref={ref} style={{ position: "relative", zIndex: 1, padding: "0 1rem" }}>
      {hearts.map(h => <div key={h.id} style={{ position: "fixed", left: `${h.x}%`, bottom: "10%", fontSize: `${h.size}rem`, animation: `floatUp 3s ease ${h.delay}s forwards`, pointerEvents: "none", zIndex: 999 }}>❤️</div>)}
      <div style={{ fontSize: "4rem", marginBottom: "2rem", filter: "drop-shadow(0 0 30px rgba(249,168,212,0.7))", animation: vis ? "heartPop 0.6s ease" : "none" }}>❤️</div>
      {lines.map((line, i) => (
        <div key={i} style={{ opacity: step > i ? 1 : 0, transform: step > i ? "translateY(0)" : "translateY(20px)", transition: "opacity 1s ease,transform 1s ease", fontFamily: "Georgia,serif", fontSize: "clamp(0.95rem,3vw,1.1rem)", marginBottom: "1.2rem", maxWidth: "500px", lineHeight: 1.7, ...line.style }}>
          {line.text}
        </div>
      ))}
      {step >= 5 && (
        <div style={{ animation: "fadeIn 1.2s ease", marginTop: "2.5rem" }}>
          <div style={{ fontSize: "0.7rem", color: "rgba(251,191,36,0.6)", letterSpacing: "0.3em", marginBottom: "0.5rem", textTransform: "uppercase" }}>with all my heart</div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.6rem,6vw,3rem)", fontWeight: "400", color: "#fbbf24", textShadow: "0 0 30px rgba(251,191,36,0.5)", marginBottom: "1rem" }}>Happy Birthday, {name} 🎂❤️</h1>
          <p style={{ color: "rgba(252,231,243,0.7)", fontStyle: "italic", marginBottom: "2rem", fontSize: "clamp(0.88rem,2.5vw,1rem)" }}>"Here's to another year of you being absolutely amazing."</p>
          <p style={{ color: "#f9a8d4", fontFamily: "Georgia,serif", fontSize: "clamp(0.95rem,2.5vw,1.1rem)" }}>— {yourName} ❤️</p>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════
// 🎬 MAIN APP
// ══════════════════════════════════════════════════════
export default function BirthdayUniverse() {
  const [phase, setPhase] = useState("landing");
  const [tw1Done, setTw1Done] = useState(false);
  const [tw2Done, setTw2Done] = useState(false);
  const [showEnter, setShowEnter] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [heartClicks, setHeartClicks] = useState(0);
  const [easterEgg, setEasterEgg] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => { if (tw2Done) setTimeout(() => setShowEnter(true), 600); }, [tw2Done]);

  useEffect(() => {
    if (phase !== "main") return;
    const onScroll = () => {
      const el = document.documentElement;
      setScrollPct(Math.round(el.scrollTop / (el.scrollHeight - el.clientHeight) * 100));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [phase]);

  const enterUniverse = () => { setPhase("transition"); setConfetti(true); setTimeout(() => setPhase("main"), 1500); };
  const handleHeartClick = () => { const n = heartClicks + 1; setHeartClicks(n); if (n >= 5) { setEasterEgg(true); setHeartClicks(0); } };

  if (phase === "landing" || phase === "transition") {
    return (
      <div style={{ minHeight: "100vh", background: "radial-gradient(ellipse at 20% 30%,#1e0a2e 0%,#0d0118 50%,#1a0a1e 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem 1rem", position: "relative", overflow: "hidden", opacity: phase === "transition" ? 0 : 1, transition: "opacity 0.8s ease" }}>
        <ParticleCanvas />
        <Confetti active={confetti} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "580px", width: "100%" }}>
          <div
            onClick={handleHeartClick}
            style={{ fontSize: "3rem", marginBottom: "2rem", cursor: "pointer", filter: "drop-shadow(0 0 15px rgba(249,168,212,0.6))", transition: "transform 0.2s", userSelect: "none", display: "inline-block" }}
            onMouseDown={e => e.currentTarget.style.transform = "scale(0.9)"}
            onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
            onTouchStart={e => e.currentTarget.style.transform = "scale(0.9)"}
            onTouchEnd={e => e.currentTarget.style.transform = "scale(1)"}
          >❤️</div>
          <h1 style={{ color: "#fce7f3", fontFamily: "Georgia,serif", fontSize: "clamp(1.4rem,5vw,2.5rem)", fontWeight: "300", marginBottom: "1.5rem", textShadow: "0 0 30px rgba(249,168,212,0.5)", letterSpacing: "0.05em" }}>Hey, Birthday Girl… ❤️</h1>
          <div style={{ color: "rgba(248,213,224,0.85)", fontSize: "clamp(0.9rem,2.5vw,1.1rem)", lineHeight: 1.8, marginBottom: "1rem", minHeight: "3em", fontStyle: "italic" }}>
            <Typewriter text="Today isn't just another day..." speed={45} onDone={() => setTw1Done(true)} />
          </div>
          {tw1Done && (
            <div style={{ color: "rgba(248,213,224,0.85)", fontSize: "clamp(0.9rem,2.5vw,1.1rem)", lineHeight: 1.8, marginBottom: "2rem", minHeight: "3em", fontStyle: "italic" }}>
              <Typewriter text="It's the day my favorite person came into this world." speed={40} onDone={() => setTw2Done(true)} />
            </div>
          )}
          {tw2Done && <div style={{ animation: "fadeIn 1s ease" }}><h2 style={{ color: "#fbbf24", fontFamily: "Georgia,serif", fontSize: "clamp(1.2rem,4vw,2rem)", fontWeight: "400", marginBottom: "2.5rem", textShadow: "0 0 20px rgba(251,191,36,0.4)" }}>Happy Birthday, {config.girlfriendName} ✨</h2></div>}
          {showEnter && (
            <div style={{ animation: "fadeIn 0.8s ease" }}>
              <button
                onClick={enterUniverse}
                style={{ background: "linear-gradient(135deg,#7c3aed,#be185d)", color: "#fff", border: "none", padding: "1rem 2.5rem", borderRadius: "50px", fontSize: "clamp(0.9rem,2.5vw,1.05rem)", cursor: "pointer", fontWeight: "600", boxShadow: "0 0 30px rgba(190,24,93,0.5)", transition: "all 0.3s", minHeight: "56px" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(190,24,93,0.7)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 0 30px rgba(190,24,93,0.5)"; }}>
                Enter Your Birthday Universe →
              </button>
            </div>
          )}
        </div>
        {easterEgg && (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 9998, display: "flex", alignItems: "center", justifyContent: "center", animation: "fadeIn 0.4s ease", padding: "1rem" }} onClick={() => setEasterEgg(false)}>
            <div style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.4),rgba(190,24,93,0.4))", border: "1px solid rgba(249,168,212,0.5)", borderRadius: "20px", padding: "2.5rem 1.5rem", maxWidth: "340px", width: "100%", textAlign: "center", backdropFilter: "blur(10px)" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔐✨</div>
              <p style={{ color: "#fce7f3", fontFamily: "Georgia,serif", fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic" }}>"You found a secret… I love you more than you know. ❤️"</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", marginTop: "1rem" }}>tap anywhere to close</p>
            </div>
          </div>
        )}
        <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}} @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
      </div>
    );
  }

  return (
    <div style={{ background: "radial-gradient(ellipse at 20% 0%,#1e0a2e 0%,#0d0118 40%,#0a0010 100%)", minHeight: "100vh", color: "#fff", position: "relative", overflowX: "hidden" }}>
      <ParticleCanvas />
      <Confetti active={confetti} />
      <MusicPlayer />

      {/* Progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, height: "2px", width: `${scrollPct}%`, background: "linear-gradient(90deg,#7c3aed,#ec4899,#fbbf24)", zIndex: 100, transition: "width 0.2s" }} />

      {/* Back to top */}
      {scrollPct > 20 && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ position: "fixed", bottom: "1.25rem", right: "1rem", background: "rgba(147,51,234,0.7)", border: "1px solid rgba(192,132,252,0.5)", color: "#fff", width: "48px", height: "48px", borderRadius: "50%", fontSize: "1.1rem", cursor: "pointer", zIndex: 50, backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center" }}>↑</button>
      )}

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* HERO */}
        <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "3rem 1rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem", filter: "drop-shadow(0 0 20px rgba(249,168,212,0.5))" }}>✨</div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.7rem,6vw,3.5rem)", fontWeight: "300", color: "#fce7f3", marginBottom: "0.5rem", textShadow: "0 0 30px rgba(249,168,212,0.4)", letterSpacing: "0.02em" }}>A Little Universe</h1>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.7rem,6vw,3.5rem)", fontWeight: "300", color: "#f9a8d4", marginBottom: "2rem", textShadow: "0 0 30px rgba(249,168,212,0.6)" }}>Made Just for You ✨</h1>
          <p style={{ color: "rgba(248,213,224,0.7)", fontSize: "clamp(0.9rem,2.5vw,1.05rem)", fontStyle: "italic", marginBottom: "0.5rem" }}>Happy Birthday,</p>
          <h2 style={{ color: "#fbbf24", fontFamily: "Georgia,serif", fontSize: "clamp(1.6rem,5vw,3rem)", fontWeight: "400", textShadow: "0 0 25px rgba(251,191,36,0.4)", marginBottom: "3rem" }}>{config.girlfriendName} 🎂❤️</h2>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>Scroll to begin your journey ↓</p>
        </section>

        {/* AGE COUNTER */}
        <Section title="You've Been Alive For…" emoji="⏳">
          <div style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(192,132,252,0.2)", borderRadius: "20px", padding: "clamp(1.25rem,4vw,2rem)" }}>
            <AgeCounter />
          </div>
        </Section>

        {/* LOVE LETTER */}
        <Section title="A Letter I Wanted You To Read Today" emoji="💌">
          <div style={{ background: "linear-gradient(135deg,rgba(255,253,245,0.06),rgba(255,253,245,0.02))", border: "1px solid rgba(249,168,212,0.2)", borderRadius: "20px", padding: "clamp(1.25rem,5vw,3rem)", position: "relative", backdropFilter: "blur(10px)" }}>
            <div style={{ position: "absolute", top: "-1px", left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#7c3aed,#be185d)", width: "60px", height: "3px", borderRadius: "2px" }} />
            <p style={{ color: "#fce7f3", fontFamily: "Georgia,serif", fontSize: "clamp(0.95rem,2.5vw,1.05rem)", lineHeight: 1.9, fontStyle: "italic", marginBottom: "1.5rem" }}>Dear {config.girlfriendName},</p>
            <p style={{ color: "rgba(252,231,243,0.85)", fontFamily: "Georgia,serif", fontSize: "clamp(0.9rem,2.5vw,1rem)", lineHeight: 1.9, marginBottom: "1.5rem" }}>{config.birthdayMessage}</p>
            <p style={{ color: "rgba(252,231,243,0.7)", fontFamily: "Georgia,serif", fontSize: "clamp(0.85rem,2.5vw,0.95rem)", lineHeight: 1.9, marginBottom: "2rem" }}>
              Thank you for being you.<br />Thank you for the smiles.<br />Thank you for the messages that made my day.<br />And thank you for making my world a little brighter.
            </p>
            <div style={{ borderTop: "1px solid rgba(249,168,212,0.2)", paddingTop: "1.5rem", textAlign: "right" }}>
              <p style={{ color: "#f9a8d4", fontFamily: "Georgia,serif", fontStyle: "italic", fontSize: "1rem", margin: 0 }}>Forever yours,<br /><span style={{ fontSize: "1.3rem", color: "#fbbf24" }}>{config.yourName} ❤️</span></p>
            </div>
          </div>
        </Section>

        {/* PHOTO GALLERY */}
        <Section title="Our Memories in Photos" emoji="📸">
          <PhotoGallery />
        </Section>

        {/* TIMELINE */}
        <Section title="How We Became Us" emoji="❤️">
          <div style={{ position: "relative", paddingLeft: "clamp(1.5rem,5vw,3rem)" }}>
            <div style={{ position: "absolute", left: "clamp(1.5rem,5vw,3rem)", top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg,#7c3aed,#be185d,#7c3aed)", borderRadius: "1px", opacity: 0.4 }} />
            {config.timeline.map((item, i) => (
              <div key={i} style={{ position: "relative", paddingLeft: "2rem", paddingBottom: "2.5rem" }}>
                <div style={{ position: "absolute", left: "-8px", top: "4px", width: "18px", height: "18px", background: "linear-gradient(135deg,#7c3aed,#ec4899)", borderRadius: "50%", boxShadow: "0 0 10px rgba(147,51,234,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "10px" }}>{item.emoji}</span>
                </div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", marginBottom: "0.3rem", letterSpacing: "0.05em" }}>{item.date}</div>
                <div style={{ color: "#fce7f3", fontFamily: "Georgia,serif", fontSize: "clamp(0.95rem,2.5vw,1.1rem)", fontWeight: "500", marginBottom: "0.4rem" }}>{item.title}</div>
                <div style={{ color: "rgba(252,231,243,0.65)", fontSize: "clamp(0.82rem,2vw,0.9rem)", lineHeight: 1.6, fontStyle: "italic" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* MINI GAME */}
        <Section title="Catch My Hearts" emoji="🎮">
          <div style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(192,132,252,0.3)", borderRadius: "16px", overflow: "hidden" }}>
            <MiniGame />
          </div>
        </Section>

        {/* BIRTHDAY CAKE */}
        <Section title="Make A Wish" emoji="🎂">
          <div style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(192,132,252,0.2)", borderRadius: "16px", padding: "clamp(1.25rem,4vw,2rem)", position: "relative", overflow: "hidden" }}>
            <BirthdayCake onWish={() => setConfetti(true)} />
          </div>
        </Section>

        {/* GIFT BOX */}
        <Section title="Your Surprise" emoji="🎁">
          <div style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(192,132,252,0.2)", borderRadius: "16px", padding: "clamp(1.25rem,4vw,2rem)" }}>
            <GiftBox onOpen={() => setConfetti(true)} />
          </div>
        </Section>

        {/* REASONS */}
        <Section title="Reasons I Love You" emoji="💖">
          <ReasonsCard />
        </Section>

        {/* OPEN WHEN */}
        <Section title="Open When…" emoji="💌">
          <OpenWhen />
        </Section>

        {/* FUTURE */}
        <Section title="Things I Want To Do With You Someday…" emoji="💫">
          <FutureSection />
        </Section>

        {/* FINAL */}
        <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "4rem 1rem", background: "radial-gradient(ellipse at center,rgba(124,58,237,0.15) 0%,transparent 70%)" }}>
          <FinalReveal name={config.girlfriendName} yourName={config.yourName} onConfetti={() => setConfetti(true)} />
        </section>

      </div>

      <style>{`
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        html, body { margin: 0; padding: 0; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); }
        ::-webkit-scrollbar-thumb { background: rgba(147,51,234,0.5); border-radius: 2px; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @keyframes giftPulse { 0%,100% { transform:scale(1); } 50% { transform:scale(1.05); } }
        @keyframes heartPop { 0% { transform:scale(0); } 60% { transform:scale(1.2); } 100% { transform:scale(1); } }
        @keyframes floatUp { from { transform:translateY(0); opacity:1; } to { transform:translateY(-90px); opacity:0; } }
        button { -webkit-appearance: none; touch-action: manipulation; }
        input[type=range] { -webkit-appearance: none; appearance: none; }
      `}</style>
    </div>
  );
}
