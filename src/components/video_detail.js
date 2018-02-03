import React from 'react';

const VideoDetail = ({video, darkTheme}) => {

    if(!video) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    const videoId = video.id.videoId;
    // const embedUrl = 'https://www.youtube.com/embed/' + videoId;
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={embedUrl} allowFullScreen></iframe>
            </div>
            <div className={"card"+(darkTheme?" text-white bg-dark": " text-dark bg-white")}>
                <div className="card-body">
                    <h5 className="card-title video-title">{video.snippet.title}</h5>
                    <p className="card-text video-channel">{video.snippet.channelTitle}</p>
                    <p className="card-text video-description">
                        {/*{new Date(video.snippet.publishedAt).toUTCString()}*/}
                        With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;