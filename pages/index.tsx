import type { NextPage } from 'next';
import Container from '../components/Container';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Container>
      <span className={`font-bold`}>HOME</span>
    </Container>
  );
}

export default Home
