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
  return (
    <>
      <div className={'coll-display button is-primary wide level'} onClick={toggleDrawer}>
        <div className={"level-left"}>
          {props.data.name}
        </div>
        <div className={"level-right fix-margin"}>
        {props.data.collTotal}
        <br></br> 
        Records 
        </div>
        <div className={"level-right fix-margin"} onClick={handleDL}>
        <CSVLink
          data={props.data.collResults}
          className={"button is-link is-small"}>
          Download CSV
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