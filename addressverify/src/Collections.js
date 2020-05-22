import React from 'react';
import Collection from './Collection';
import AddCollection from './AddCollection'

export default function Collections(props){
  return (
    <div>
      <AddCollection/>
      {props.collections.map((coll) => 
      <div className={"collection"}>
        <Collection data={coll}/>
      </div>
      )}

    </div>
  );
}

//props - we will need the list of collections