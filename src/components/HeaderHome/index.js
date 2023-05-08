import './headerHome.css'

const HeaderHome = () => {
    return <section className="header-home">
        <div className='info-header'>
            <button>Recien visto</button>
            <h3>Aqui tenemos la seccion 1</h3>
            <p>
                En esta parte va el texto que acompaña la seccion con algunos detalles
                de la descripcion y demas cosas que se quieran agregar para que el usuario
                sepa de que se trata esta seccion de la pagina web que esta viendo.
            </p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Et_urPJ2vlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>
}

export default HeaderHome;