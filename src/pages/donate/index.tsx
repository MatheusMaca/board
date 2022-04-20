import styles from './styles.module.scss';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { userInfo } from 'os';
import { PayPalButtons } from '@paypal/react-paypal-js';
import firebase from '../../services/firebaseConnection';
import { useState } from "react";

interface DonateProps {
    user: {
        nome: string;
        id: string;
        image: string;
    }
}

export default function Donate({ user }: DonateProps) {
    const [vip, setVip] = useState(false);
    const [donationValue, setDonationValue] = useState("1");

    async function handleSaveDonate() {
        await firebase.firestore().collection('users')
            .doc(user.id)
            .set({
                donate: true,
                lastDonate: new Date(),
                image: user.image
            })
            .then(() => {
                setVip(true);
            })
    }

    return (
        <>
            <Head>
                <title>Ajude a plataforma</title>
            </Head>
            <main className={styles.container}>
                <img src="/images/rocket.svg" alt="Seja Apoiador" />

                {vip && (
                    <div className={styles.vip}>
                        <img src={user.image} alt="foto do perfil do usuário" />
                        <span>Parabéns você é um novo apoiador!</span>
                    </div>
                )}

                <h1>Seja um apoiador deste projeto! 💰</h1>
                <h3>Contribua com <span>com um valor abaixo</span></h3>

                <div className={styles.donateValues}>
                    <button onClick={() => setDonationValue("1")}>1</button>
                    <button onClick={() => setDonationValue("5")}>5</button>
                    <button onClick={() => setDonationValue("10")}>10</button>
                    <button onClick={() => setDonationValue("25")}>25</button>
                </div>
                <PayPalButtons
                    forceReRender={[donationValue]}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: donationValue
                                }
                            }]
                        })
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then(function (details) {
                            handleSaveDonate();
                        })
                    }} />
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