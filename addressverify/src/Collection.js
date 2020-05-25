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
        <div className={"level-right"}>
        {props.data.collValid}/{props.data.collTotal}
        </div>
      </div>
      {isOpen ?
        props.data.jobs.map((job) =>
          <div className={"job"}>
            <Job data={job} />
          </div>
        )
        : ''}
      {isOpen ?
        <AddJob />
        : ''}
    </>
  );
}