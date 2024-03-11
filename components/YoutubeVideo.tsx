import React from 'react';

const YoutubeVideo = ({ videoUrl }) => (
    <div className="pt-10">
        <iframe
            src={videoUrl}
            title="Youtube Video"
            allowFullScreen
            className="rounded-lg h-[320px] sm:h-[560px] w-full aspect-w-16 aspect-h-9 mx-auto"
        />
    </div>
);

export default YoutubeVideo;