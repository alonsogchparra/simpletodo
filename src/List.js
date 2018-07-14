import React from 'react';

const List = props => (
  <ul className="list-group">
    {props.items.map(item => {
      return(
        <div key={item}>
          <li className="list-group-item mt-2">{item}</li>
          <button className="btn btn-danger mt-2" onClick={props.delete}>Done</button>
        </div>
      )
    })}
  </ul>
);

export default List;