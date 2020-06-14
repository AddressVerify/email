import React from 'react';
import CollectionModal from './CollectionModal';

export default function AddCollection(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <>
      <div className={"collection"}>
        <button className={"button is-primary wide coll-display"} onClick={toggleModal}>+ New Collection</button>
      </div>
      {isOpen ?
        <CollectionModal new={props.new} closer={toggleModal} />
        : ''}
    </>
  );
}