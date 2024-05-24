import React, {useEffect, useState} from 'react';
import Slider from "react-slick"
import axios from 'axios';
import { registerLicense } from '@syncfusion/ej2-base';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import reactLogo from './PokemonAPI.PNG';
import buildingLogo from './Building.PNG';
import PokemonSearch from './components/PokemonSearch';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { blue, red } from '@mui/material/colors';

registerLicense("Ngo9BigBOggjHTQxAR8/V1NBaF1cXmhMYVF/WmFZfVpgcV9FY1ZUQ2YuP1ZhSXxXdkBhW39bc3dQQWJVWU0=")

const Api_url="https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

function App() {
  const [pokemon, SetPokemon] = useState({})
  const [searchTerm, setSearchTerm] = useState('');
  const [showList, setShowList] = useState(false);
  const [url, setUrl] = useState("")
  const [game, setGame] = useState("")
  const [ClickButton, setClickButton] = useState('');

  const getApiUrl = async ()=> {
    try{
      const response = await axios.get(Api_url)
      SetPokemon(response.data)
    }catch{
      console.log("Erro na carregamento da API")
    }  
  };

  useEffect(()=> {
    getApiUrl()
  })

  const handleSearch = (e)=> {
    //Guarda basicamente o texto do search nesta variável para colocar no searchTerm e procurar no filtered abaixo  
    setSearchTerm(e.target.value)
    setShowList(false)
  }
  const handleButtonSearch = async ()=> {
    //Guarda basicamente o texto do search nesta variável para colocar no searchTerm e procurar no filtered abaixo  
    setShowList(true)
    const result = pokemon.results.find(p=> p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if(result) {
      try{
        const response = await axios.get(result.url)
        setUrl(response.data)
      }catch {
        console.log('Erro ao carregar detalhes do pokemon')
      }
    }
  }

  //Este através da variável seacrch Term presente no TextField procurar na lista pokemon.results 
  const filteredResults = pokemon.results ? pokemon.results.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.url.toLowerCase().includes(searchTerm.toLowerCase()) 
  ): [];

  const handleHome = () => (
    setClickButton('home')
  )
  const handleSearchPokemon = () => (
    setClickButton('pokemon')
  )
  const handleLogin = () => (
    setClickButton('login')
  )

  const data = [
    {
      id:'1',
      image: reactLogo
    },
    {
      id:'2',
      image: buildingLogo
    }
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='App'>
      <NavBar
      handleHome={handleHome}
      handleSearchPokemon={handleSearchPokemon}
      handleLogin={handleLogin}
      />
      <div>
      {ClickButton === 'home' &&
      <div className='containerHome'>
        <Slider {...settings}>
            <div className="pokemon" style={{ backgroundImage: `url(${reactLogo})` }}>
            <h3><img src={reactLogo} alt='Placeholder' className="centered-image"/></h3> 
            </div>
            <div className="pokemon" style={{ backgroundImage: `url(${buildingLogo})` }}>
              <h3><img src={buildingLogo} alt='Placeholder' className="centered-image"/></h3> 
            </div>
            <div className="pokemon" style={{ backgroundImage: `url(${reactLogo})` }}>
              <h3><img src={buildingLogo} alt='Placeholder' className="centered-image"/></h3> 
            </div>
        </Slider>
        <div className="search-container">
            {/* label: Rótulo no campo de entrado a primeiracoisa que vemos antes de inserir o texto
                value: O valor que inseri na caixa de texto
                onChange: Função que indica sempre que o valor de entrada mudar atualiza o estado do componente, 
                este é que permite que escreva na caixa de texto */ }
            
            <div className="pokemon" style={{ backgroundImage: `url(${reactLogo})` }}>
            <h3><img src={reactLogo} alt='Placeholder' className="centered-image"/></h3> 
            </div>
            <div className="pokemon" style={{ backgroundImage: `url(${buildingLogo})` }}>
              <h3><img src={buildingLogo} alt='Placeholder' className="centered-image"/></h3> 
            </div>
            <div className="pokemon" style={{ backgroundImage: `url(${reactLogo})` }}>
              <h3><img src={buildingLogo} alt='Placeholder' className="centered-image"/></h3> 
            </div>
        </div>
      </div> 
      }
      {ClickButton === 'pokemon' && 
        <PokemonSearch
            pokemon={pokemon}
            searchTerm={searchTerm} 
            handleSearch={handleSearch}
            handleButtonSearch={handleButtonSearch}
            showList={showList}
            setShowList={setShowList}
            filteredResults={filteredResults}
            url={url}
        />
      }
      </div>
      <Footer/>
    </div>
  );
}

export default App;

