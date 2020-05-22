import React from 'react';
import Job from './Job';
import AddJob from './AddJob';

export default function Collection(props){
  return (
    <>
    <div className={'coll-display'}>
      {props.data.name}
    </div>

    {props.data.jobs.map((job) =>
    <div className={"job"}>
      <Job data={job}/>
    </div>
    )}
    <AddJob/>
    </>
  );
}