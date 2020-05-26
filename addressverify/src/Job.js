import React from 'react';


export default function Job(props) {
  return (
    <>
        <div className={"level-item job-display"}>
          {props.data.jobName}
        </div>
        <div className={"level-item job-display"}>
          {props.data.time}
        </div>
        <div className={"level-item job-display"}>
          {props.data.verifiedValid} Passed
        </div>
        <div className={"level-item job-display"}>
          {props.data.verifiedTotal} Records
        </div>
    </>
  );
}
