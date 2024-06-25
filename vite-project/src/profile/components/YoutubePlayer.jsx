import { useEffect } from "react";
import "./Youtube.css";

const YouTubePlayer = ({ videoId }) => {
  useEffect(() => {
    if (window.YT) {
      loadVideo();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      window.onYouTubeIframeAPIReady = loadVideo;
      document.body.appendChild(tag);
    }
  }, [videoId]);

  const loadVideo = () => {
    new window.YT.Player("youtube-player", {
      videoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        rel: 0,
        iv_load_policy: 3,
        disablekb: 1,
        fs: 0,
      },
      events: {
        onReady: (event) => {
          event.target.playVideo();
        },
      },
    });
  };

  return (
    <div className="youtube-div">
      <div className="youtube-player"></div>
    </div>
  );
};

export default YouTubePlayer;
