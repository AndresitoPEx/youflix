import ReactPlayer from 'react-player';
import './videoHome.css'


const VideoHome = (props) => {

    const { titulo, link, imagen, categoria, descripcion } = props.datos;

    const { colorPrimario } = props;

    return <div className='video-home' style={{border: `5px ${colorPrimario} solid`}}>
        <ReactPlayer url={link} controls={false} width='100%' height='100%' className="player"/>
            {/* <h3>{titulo}</h3>
            <p>{descripcion}</p> */}

    </div>
}

export default VideoHome