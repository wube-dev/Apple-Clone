import React, { Component } from "react";
import "../../css/pages.css"; // Make sure your CSS file path is correct

class Youtube extends Component {
  constructor() {
    super();
    this.state = {
      youTubeVideos: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyA09a3u8mRmO1YGw70Y_SfMeTces73XApU&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6",
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeVideos = data.items;
        this.setState({ youTubeVideos });
      })
      .catch((err) => console.error("YouTube API error:", err));
  }

  render() {
    return (
      <div className="row justify-content-center">
        {this.state.youTubeVideos.map((singleVideo, i) => {
          const vidId = singleVideo.id.videoId;
          const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
          return (
            <div key={i} className="col-sm-12 col-md-4 mb-4">
              <div className="singleVideoWrapper text-center">
                <div className="videoThumbnail mb-2">
                  <a href={vidLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={singleVideo.snippet.thumbnails.high.url}
                      alt={singleVideo.snippet.title}
                      className="img-fluid rounded"
                    />
                  </a>
                </div>
                <div className="videoTitle mb-1">
                  <a href={vidLink} target="_blank" rel="noopener noreferrer">
                    {singleVideo.snippet.title}
                  </a>
                </div>
                <div className="videoDesc">
                  {singleVideo.snippet.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Youtube;
