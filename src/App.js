import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

import { useState } from 'react';
import './reset.css';
import Header from './components/Header/Header';
import FormularioNuevoVideo from './components/FormNuevoVideo';
import Home from './components/Home';
import HeaderHome from './components/HeaderHome';
import Section from './components/Section';
import Footer from './components/footer';



function App() {

  const [mostrarForm, setMostrarForm] = useState(false);
  const [videos, setVideos] = useState([{

    titulo: "Video 1",
    link: "https://www.youtube.com/watch?v=J6qIzKxmW8Y",
    imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
    categoria: "Favoritos",
    descripcion: "Este es el video 1"

  },
  {
    titulo: "Video 2",
    link: "https://www.youtube.com/watch?v=0R-fFbA737A",
    imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
    categoria: "Favoritos",
    descripcion: "Este es el video 2"
  },
  {
    titulo: "Video 3",
    link: "https://www.youtube.com/watch?v=aA2IRoPFIn0",
    imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
    categoria: "Favoritos",
    descripcion: "Este es el video 3"
  },
  {
    titulo: "Video 4",
    link: "https://www.youtube.com/watch?v=SjYecEQFL0U",
    imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
    categoria: "Favoritos",
    descripcion: "Este es el video 4"
  },
  {
    titulo: "Video 5",
    link: "https://www.youtube.com/watch?v=ygdVEIrVnIk",
    imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
    categoria: "Favoritos",
    descripcion: "Este es el video 5"
  },
  ]);



  const cambiarEstado = () => {
    setMostrarForm(!mostrarForm);
  }

  //Registrando videos
  const registrarVideo = (e) => {
    console.log("nuevo video", e);
    setVideos([...videos, e]);
  }



  //Lista de categorias
  const categorias = [
    {
      nombre: "Favoritos",
      colorPrimario: "#cce5ff",
    },
    {
      nombre: "Entretenimiento",
      colorPrimario: "#a3ffac",
    },
    {
      nombre: "Educación",
      colorPrimario: "#ffca99",
    },
    {
      nombre: "Tecnología",
      colorPrimario: "#eaffc2",
    },
    {
      nombre: "Música",
      colorPrimario: "#ff8097",
    }
  ]

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
        />
        )
      }

      <Footer />
    </div>
  );
}

export default App;
