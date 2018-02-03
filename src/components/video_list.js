import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                darkTheme={props.darkTheme}
                key={video.etag}
                video={video}
                onVideoClick={props.onVideoSelect}
            />
        );
    });
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;