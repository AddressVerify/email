import React from 'react';


export default function Job(props){
  return (
    <>
      {props.data.jobName}
      <span>{props.data.verifiedValid} / {props.data.verifiedTotal}</span>
    </>
  );
}
