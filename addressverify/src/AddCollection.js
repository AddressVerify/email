import React from 'react';
import CollectionModal from './CollectionModal';

export default function AddCollection(props) {
  //drawer mechanism using hooks
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <>
      <div className={"collection"}>
        <button className={"button wide coll-display"} onClick={toggleModal}>+ New Collection</button>
      </div>
      {isOpen ?
        <CollectionModal new={props.new} closer={toggleModal} />
        : ''}
    </>
  );
}