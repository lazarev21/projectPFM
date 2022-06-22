import React from 'react'

export function GenreCheckboxList ({dataGenre}){
    return (
      <div className="filter-list__genre-checkbox">
          {dataGenre.map((item, index) =>
            <GenreCheckboxItem key={index} name={item.name} id={item.id}/>
          )}
      </div>  
    ) 
  }
  
function GenreCheckboxItem({name, id}) {
    return (
      <div className="checkbox__item">
      <input type="checkbox" id={id} />
      <label htmlFor="action">{name}</label>
    </div>
    )
  }