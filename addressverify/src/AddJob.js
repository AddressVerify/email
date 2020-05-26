import React from 'react';
import Submit from './Submit';

export default function AddJob(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <>
      <div className={"collection"}>
        <button className={"button is-primary wide"} onClick={toggleModal}>+ New Job</button>
      </div>
      {isOpen ?
        <Submit i={props.i} newJob={props.newJob} num={props.jobNumber} closer={toggleModal}/>
        : ''}
    </>
  );
}
