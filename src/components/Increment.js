import React from 'react'
import './PokemonSearch.css'
import { ListViewComponent } from '@syncfusion/ej2-react-lists';

const Increment = ({showList, pokemon2, filteredResults}) => {
  return (
    <div className='ListView'>
    {<ListViewComponent
        id="list"
        dataSource={filteredResults}
        template = { data => (
        <div>
          <p>Nome Pokemon:</p>
          <p>{data.name}</p>
        </div>
    )}
    />}
    {pokemon2 && pokemon2.sprites && (
      <div>
        <p>{<img style={{height: '200px', width: '300px'}} src={pokemon2.sprites.front_default} alt='Placeholder'/>}</p>
      </div>
    )}
    { <div>
        <p>Number:</p>
        <p>{pokemon2.id}</p>
    </div>}    
    </div> 
  )
}

export default Increment