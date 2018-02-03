import React from 'react';

const VideoListItem = ({video, onVideoClick, darkTheme}) => {
    // insted of (props)=> {} we use ({video})=>{}
    // equivalent to const video = props.video
    // console.log(video);
    const imgUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li onClick={() => onVideoClick(video)} className={"list-group-item" + (darkTheme?" text-white bg-dark": " text-dark bg-white")}>
            <div className="video-list media video-item">
                <img className="align-self-center mr-3" src={imgUrl} alt={title}/>
                <div className="media-body">
                    <h5 className="mt-0">
                        {title}
                    </h5>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;