import React from 'react';
import Job from './Job';
import AddJob from './AddJob';

export default function Collection(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  return (
    <>
      <div className={'coll-display button is-primary wide level'} onClick={toggleDrawer}>
        <div className={"level-left"}>
          {props.data.name}
        </div>
        <div className={"level-right fix-margin"}>
        Records : {props.data.collTotal}
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