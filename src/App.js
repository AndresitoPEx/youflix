import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './reset.css';
import Header from './components/Header/Header';
import FormularioNuevoVideo from './components/FormNuevoVideo';
import Home from './components/Home';
import HeaderHome from './components/HeaderHome';
import Section from './components/Section';
import Footer from './components/footer';



function App() {

  const [mostrarForm, setMostrarForm] = useState(false);
  const [videos, setVideos] = useState([
    {
      id: uuid(),
      titulo: "Video 1",
      link: "https://www.youtube.com/watch?v=J6qIzKxmW8Y",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Favoritos",
      descripcion: "Este es el video 1"

    },
    {
      id: uuid(),
      titulo: "Video 2",
      link: "https://www.youtube.com/watch?v=0R-fFbA737A",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Favoritos",
      descripcion: "Este es el video 2"
    },
    {
      id: uuid(),
      titulo: "Video 3",
      link: "https://www.youtube.com/watch?v=aA2IRoPFIn0",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Favoritos",
      descripcion: "Este es el video 3"
    },
    {
      id: uuid(),
      titulo: "Video 4",
      link: "https://www.youtube.com/watch?v=SjYecEQFL0U",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Favoritos",
      descripcion: "Este es el video 4"
    },
    {
      id: uuid(),
      titulo: "Video 5",
      link: "https://www.youtube.com/watch?v=ygdVEIrVnIk",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Favoritos",
      descripcion: "Este es el video 5"
    },
  ]);

  const [categorias, setCategorias] = useState(
    [
      {
        id: uuid(),
        nombre: "Favoritos",
        colorPrimario: "#cce5ff",
      },
      {
        id: uuid(),
        nombre: "Entretenimiento",
        colorPrimario: "#a3ffac",
      },
      {
        id: uuid(),
        nombre: "Educación",
        colorPrimario: "#ffca99",
      },
      {
        id: uuid(),
        nombre: "Tecnología",
        colorPrimario: "#eaffc2",
      },
      {
        id: uuid(),
        nombre: "Música",
        colorPrimario: "#ff8097",
      }
    ]
  )



  const cambiarEstado = () => {
    setMostrarForm(!mostrarForm);
  }

  //Registrando videos
  const registrarVideo = (e) => {
    setVideos([...videos, e]);
  }

  //eliminar video
  const eliminarVideo = (id) => {
    const newVideos = videos.filter((video) => video.id !== id);
    setVideos(newVideos);
  }



  return (
    <div className="App">

      <Header cambiarEstado={cambiarEstado} />

      {
        mostrarForm ? <FormularioNuevoVideo
          categorias={categorias.map((categoria) => categoria.nombre)}
          registrarVideo={registrarVideo}
        /> : null
      }

      <Home />
      <HeaderHome />
      {
        categorias.map((categoria, index) => <Section
          datos={categoria}
          key={categoria.nombre}
          nombre={categoria.nombre}
          color={categoria.colorPrimario}
          videos={videos.filter((video) => video.categoria === categoria.nombre)}
          eliminarVideo={eliminarVideo}
        />
        )
      }

      <Footer />
    </div>
  );
}

export default App;
