export default function Video({videoName}: {videoName: string;}) {
    return (
        <div>
            <video width={320} height={260} controls>
                <source src={`/videos/${videoName}.mp4`} type='video/mp4'/>
            </video>
        </div>
    )
}