import { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import Backdrop from '@/components/Backdrop/Backdrop';
import List from '@/components/List/List';
import './App.css';
import Button from '@/components/UI/Button';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      <h1>React Animations</h1>
      <Modal isOpen={isModalOpen} close={closeModalHandler} />
      <Backdrop isOpen={isModalOpen} close={closeModalHandler} />
      <Button className='BaseButton' onClick={openModalHandler}>Open Modal</Button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}
