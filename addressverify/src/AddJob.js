import React from 'react';
import Submit from './Submit';

export default function AddJob(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <>
      <div className={"collection"}>
        <button className={"button wide"} onClick={toggleModal}>+ New Job</button>
      </div>
      {isOpen ?
        <Submit index={props.index} newJob={props.newJob} num={props.jobNumber} closer={toggleModal}/>
        : ''}
    </>
  );
}
