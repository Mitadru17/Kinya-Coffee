import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(() => {
    const saved = localStorage.getItem("kinya-music-muted");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerReadyRef = useRef(false);

  const videoId = "BGiZSH-ozvM";

  useEffect(() => {
    localStorage.setItem("kinya-music-muted", JSON.stringify(isMuted));
  }, [isMuted]);

  useEffect(() => {
    if (!isMuted) {
      setShowPrompt(false);
    }
  }, [isMuted]);

  useEffect(() => {
    if (iframeRef.current && playerReadyRef.current) {
      const command = isMuted ? "mute" : "unMute";
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: command,
          args: [],
        }),
        "*"
      );
    }
  }, [isMuted]);

  const handleIframeLoad = () => {
    setIsLoaded(true);
    setTimeout(() => {
      playerReadyRef.current = true;
      if (iframeRef.current) {
        const command = isMuted ? "mute" : "unMute";
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({
            event: "command",
            func: command,
            args: [],
          }),
          "*"
        );
      }
    }, 1000);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Hidden YouTube iframe for audio */}
      <div className="fixed -z-50 opacity-0 pointer-events-none" aria-hidden="true">
        <iframe
          ref={iframeRef}
          width="1"
          height="1"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&start=3260`}
          title="Background Music"
          allow="autoplay; encrypted-media"
          onLoad={handleIframeLoad}
        />
      </div>

      {/* Music Control Button - Fixed position bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 100 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* First-time prompt with typewriter effect */}
        <AnimatePresence>
          {showPrompt && isMuted && isLoaded && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative bg-ink text-canvas px-5 py-3 mono-font text-xs font-bold border-2 border-ink"
            >
              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-terracotta" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-terracotta" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-terracotta" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-terracotta" />
              
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-terracotta text-base"
                >
                  ♪
                </motion.span>
                <span>TAP FOR VIBES</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="w-2 h-4 bg-terracotta ml-1"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button Container */}
        <div className="relative">
          {/* Outer rotating ring when playing */}
          <AnimatePresence>
            {!isMuted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-[-8px] pointer-events-none"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border-2 border-dashed border-terracotta rounded-full"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pulsing glow effect when playing */}
          {!isMuted && (
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-terracotta rounded-full blur-md pointer-events-none"
            />
          )}

          {/* The main button */}
          <motion.button
            onClick={toggleMute}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            className={`
              group relative w-16 h-16 flex items-center justify-center rounded-full
              border-3 transition-all duration-300 overflow-hidden
              ${!isMuted 
                ? 'bg-gradient-to-br from-terracotta to-ink border-terracotta shadow-[0_0_20px_rgba(217,124,91,0.4)]' 
                : 'bg-canvas border-ink shadow-[4px_4px_0_0_hsl(var(--ink))] hover:shadow-[2px_2px_0_0_hsl(var(--ink))] hover:translate-x-[2px] hover:translate-y-[2px]'
              }
            `}
            style={{ borderWidth: '3px' }}
            aria-label={isMuted ? "Unmute background music" : "Mute background music"}
          >
            {/* Diagonal stripes background when muted */}
            {isMuted && (
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 4px,
                    hsl(var(--ink)) 4px,
                    hsl(var(--ink)) 8px
                  )`
                }}
              />
            )}

            {/* Vinyl record effect when playing */}
            {!isMuted && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full bg-ink/30"
              >
                {/* Vinyl grooves */}
                <div className="absolute inset-[6px] rounded-full border border-canvas/20" />
                <div className="absolute inset-[10px] rounded-full border border-canvas/10" />
                <div className="absolute inset-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta" />
              </motion.div>
            )}

            {/* Icon */}
            <motion.div
              key={isMuted ? "muted" : "unmuted"}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`relative z-10 ${!isMuted ? 'text-canvas' : 'text-ink'}`}
            >
              {isMuted ? (
                <VolumeX className="w-7 h-7" strokeWidth={2} />
              ) : (
                <Volume2 className="w-7 h-7" strokeWidth={2} />
              )}
            </motion.div>

            {/* Sound wave bars around the button when playing */}
            {!isMuted && (
              <div className="absolute inset-0 pointer-events-none">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 bg-canvas/60 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                      transformOrigin: 'center center',
                      rotate: `${i * 60}deg`,
                      translateX: '-50%',
                      translateY: '-40px',
                    }}
                    animate={{
                      height: ['4px', '12px', '4px'],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            )}
          </motion.button>

          {/* Equalizer bars beside button when playing */}
          <AnimatePresence>
            {!isMuted && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute -left-6 top-1/2 -translate-y-1/2 flex gap-[3px] items-end h-8"
              >
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-[3px] bg-ink rounded-full origin-bottom"
                    animate={{
                      scaleY: [0.3, 1, 0.5, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                    style={{ height: '100%' }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Status text with icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex items-center gap-2"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMuted ? "off" : "on"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              {!isMuted && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Music className="w-3 h-3 text-terracotta" />
                </motion.div>
              )}
              <span className={`mono-font text-[10px] font-bold tracking-widest ${!isMuted ? 'text-terracotta' : 'text-ink/50'}`}>
                {isMuted ? "[ SOUND OFF ]" : "♪ VIBING ♪"}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Hover tooltip */}
        <AnimatePresence>
          {isHovered && !showPrompt && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute -top-8 right-0 mono-font text-[9px] font-bold text-ink/40 whitespace-nowrap"
            >
              {isMuted ? "CLICK TO UNMUTE" : "CLICK TO MUTE"}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default BackgroundMusic;
