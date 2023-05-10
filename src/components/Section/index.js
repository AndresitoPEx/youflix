import VideoHome from '../VideoHome';
import './section.css'

const Section = (props) => {

    //destructuramos
    const { nombre, colorPrimario } = props.datos;
    const { videos, eliminarVideo } = props;


    const colorFondo = {
        backgroundColor: colorPrimario
    }


    return <>
        {
            videos.length > 0 ?
                <section className='section-section'>

                    <button className='boton-seccion' style={colorFondo}>
                        {nombre}
                    </button>
                    <p className='texto-seccion'>
                        En esta parte va el texto que acompaña la seccion con algunos detalles
                        de la descripcion y demas cosas que se quieran agregar para que el usuario
                        sepa de que se trata esta seccion de la pagina web que esta viendo.
                    </p>
                </section> : null
        }
        <div className='videos'>
            {/* <VideoHome /> */}
            {
                videos.map((video, index) => <VideoHome
                    datos={video}
                    key={index}
                    colorPrimario={colorPrimario}
                    eliminarVideo={eliminarVideo}
                />)
            }
        </div>
    </>

}

export default Section;