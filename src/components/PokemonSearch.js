import { red } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import TextField from "@mui/material/TextField";
import axios from 'axios';
import Decrement from './Decrement';
import Increment from './Increment';
import logo from '../logo.svg';
import './PokemonSearch.css'

const PokemonSearch = ({pokemon, searchTerm, handleSearch, handleButtonSearch, showList, setShowList, filteredResults,url}) => {
  const [id, SetId] = useState('');
  const [button, SetButton] = useState('')
  const [showListState, setShowListState] = useState(false);
  const [showListIncrease, setShowListIncrease] = useState(false);
  const [pokemon2, SetPokemon2] = useState('')
  const [showdiv, SetShowdiv] = useState(false)


  useEffect(() => {
    // Função para obter o ID do Pokémon a partir da URL
    const fetchPokemonId = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon-form/2/');
        SetId(response.data.id);
      } catch (error) {
        console.error('Erro ao buscar detalhes do Pokémon:', error);
      }
    };
    fetchPokemonId();
  }, []);

  const ButtonDecrease = () => {
    setShowListState(true)
    SetButton('Decrement')
  };
  const ButtonIncrease = async () => {
    try{
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
      SetPokemon2(response.data)
      setShowListState(true)
      setShowList(false) 
      SetShowdiv(!showdiv)
    }catch {
      console.error('Error')
    }
  }



  return (
    <div style={{ display: 'inline', float: 'center' }} className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p> 
            <div className="search-container">
              {/* label: Rótulo no campo de entrado a primeiracoisa que vemos antes de inserir o texto
                  value: O valor que inseri na caixa de texto
                  onChange: Função que indica sempre que o valor de entrada mudar atualiza o estado do componente, 
                  este é que permite que escreva na caixa de texto */ }
              
              <TextField
                style={{width:'100%', justifyContent: 'center'}}
                label="Search Pokémon"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearch}
              />
              <ButtonComponent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'2.5vh', width:'10vh'}} onClick={handleButtonSearch}>
                Click Me
              </ButtonComponent>
            </div>
            <div style={{display:'flex'}}>
                  <div>
                    {<button className="button-large" onClick={ButtonDecrease}>-</button>}
                  </div>               
                  <div className='ListView'>
                    {showList && <ListViewComponent
                      id="list"
                      dataSource={filteredResults}
                      template = { data => (
                        <div>
                          <p>Nome Pokemon:</p>
                          <p>{data.name}</p>
                        </div>
                      )}
                    />}
                    {showList && url.sprites && (
                        <p>{<img style={{height: '200px', width: '300px'}} src={url.sprites.front_default} alt="Placeholder"/>}</p>
                    )}
                    {showList &&
                      <div> 
                        <p>Number:</p>
                        <p>{url.id}</p>
                      </div>
                    }            
                  </div>
                  <div>
                    {<button className='button-large' onClick={ButtonIncrease}>+</button>}  
                    { showListState && (
                        <div>
                          <Increment showList={showList} pokemon2={pokemon2} filteredResults={filteredResults}/>
                        </div>  
                    )}   
                  </div>
            </div>
        </header>
      </div>
  )
}

export default PokemonSearch