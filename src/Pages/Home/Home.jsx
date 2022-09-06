import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';

import styles from './Home.module.scss';

const prizes = [
  {
    image: 'https://i.ibb.co/6Z6Xm9d/good-1.png',
  },
  {
    image: 'https://i.ibb.co/T1M05LR/good-2.png',
  },
  {
    image: 'https://i.ibb.co/Qbm8cNL/good-3.png',
  },
  {
    image: 'https://i.ibb.co/5Tpfs6W/good-4.png',
  },
  {
    image: 'https://i.ibb.co/64k8D1c/good-5.png',
  },
];

const winPrizeIndex = 0;

const reproductionArray = (array = [], length = 0) => [
  ...Array(length)
    .fill('_')
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

const reproducedPrizeList = [
  ...prizes,
  ...reproductionArray(prizes, prizes.length * 3),
  ...prizes,
  ...reproductionArray(prizes, prizes.length),
];

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

const prizeList = reproducedPrizeList.map((prize) => ({
  ...prize,
  id: generateId(),
}));

function Home () {

  const [start, setStart] = useState(false);

  const prizeIndex = prizes.length * 4 + winPrizeIndex;

  const handleStart = () => {
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    alert('🥳 Prize defined! 🥳');
  };

  
  return (
    <Container className={styles.container}>
      <h1>Добро пожаловать</h1>
      <RoulettePro
        prizes={prizeList}
        prizeIndex={prizeIndex}
        start={start}
        onPrizeDefined={handlePrizeDefined}
      />
      <button onClick={handleStart}>Start</button>
      
    </Container>
  );     
}

export default Home;
