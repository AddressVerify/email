import React from 'react';
import Job from './Job';
import AddJob from './AddJob';
import { CSVLink } from 'react-csv';


export default function Collection(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  const handleDL = (e) => {
    e.stopPropagation()
  }
  const cleanArr = [];
  const cleanResults = (props) => {
    props.data.collTotal.forEach((result) => {
      if(result[1] === true){
        cleanArr.push(result);
      }
    })
  }
  return (
    <>
      <div className={'coll-display button wide level'} onClick={toggleDrawer}>
        <div className={"level-left size-min"}>
          {props.data.name}
        </div>
        <div className={"level-item fix-margin"}>
        {props.data.collTotal}
        <br></br> 
        Records Processed
        </div>
        <div className={"level-right fix-margin size-min"} onClick={handleDL}>
        <CSVLink
          data={props.data.collResults}
          className={"button is-primary is-small"}>
          <i class="fas fa-download"></i>
				</CSVLink>
        </div>
      </div>
      {isOpen ?
        props.data.jobs.map((job, i) =>
          <div key={i} className={"job level"}>
            <Job data={job}/>
          </div>
        )
        : ''}
      {isOpen ?
        <AddJob index={props.index} newJob={props.newJob} jobNumber={props.data.jobs.length + 1}/>
        : ''}
    </>
  );
}