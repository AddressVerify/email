import React from 'react';
import { CSVLink } from 'react-csv';


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
        {props.data.verifiedValid}
        <br></br>
         Verified
        </div>
      <div className={"level-item job-display"}>
        {props.data.verifiedTotal}
         <br></br>
         Records
        </div>
      <div className={"level-item job-display"}>
        <CSVLink
          data={props.data.jobResults} className={"button is-primary is-small"}>
           <i class="fas fa-download"></i>
				</CSVLink>
      </div>
    </>
  );
}
