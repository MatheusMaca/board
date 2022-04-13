import styles from './styles.module.scss';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { userInfo } from 'os';

interface DonateProps {
    user: {
        nome: string;
        id: string;
        image: string;
    }
}

export default function Donate({ user }: DonateProps) {
    return (
        <>
            <Head>
                <title>Ajude a plataforma</title>
            </Head>
            <main className={styles.container}>
                <img src="/images/rocket.svg" alt="Seja Apoiador" />

                <div className={styles.vip}>
                    <img src={user.image} alt="foto do perfil do usuário" />
                    <span>Parabéns você é um novo apoiador!</span>
                </div>

                <h1>Seja um apoiador deste projeto! 💰</h1>
                <h3>Contribua com <span>qualquer valor</span></h3>
                <strong>Suas vantagens são:</strong>
                <ul>
                    <li>Sua foto na Home</li>
                    <li>Editar tarefas</li>
                    <li>Detalhes das tarefas</li>
                </ul>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    if (!session?.id) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const user = {
        nome: session?.user.name,
        id: session?.id,
        image: session?.user.image
    }

    return {
        props: {
            user
        }
    }
}