import { GetStaticProps } from 'next';
import Head from 'next/head';
import styles from '../styles/styles.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizado suas tarefas</title>
      </Head>
      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Ferramente board"></img>
        <section className={styles.callToAction}>
          <h1>Uma ferramenta para seu dia a dia Escreva, planeje e organize-se</h1>
          <p><span>100% Gratuita</span> e online</p>
        </section>
        <div className={styles.donaters}>
          <img src="https://pbs.twimg.com/profile_images/1175909835789017088/qs7lZAO2_400x400.jpg" alt="Usuário 1"></img>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      
    },
    revalidate: 60 * 60 // Atualiza a cada 60 min
  }
}
