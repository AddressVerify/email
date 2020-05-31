import React from 'react';
import Collection from './Collection';
import AddCollection from './AddCollection'

export default function Collections(props){
  return (
    <div>
      {props.collections.map((coll, index) => 
      <div key={index} className={"collection"}>
        <Collection newJob={props.newJob} data={coll} index={index}/>
      </div>
      )}
      <AddCollection new={props.new}/>
    </div>
  );
}

//props - we will need the list of collections