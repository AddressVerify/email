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
        {props.data.verifiedValid} Passed
        </div>
      <div className={"level-item job-display"}>
        {props.data.verifiedTotal} Records
        </div>
      <div className={"level-item job-display"}>
        <CSVLink
          data={props.data.jobResults} className={"button is-link is-small"}>
          Download CSV
				</CSVLink>
      </div>
    </>
  );
}
