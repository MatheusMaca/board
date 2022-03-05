import styles from './style.module.scss';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton() {

    const session = true;

    return session ? (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => { }} >
            <img src="https://pbs.twimg.com/profile_images/1175909835789017088/qs7lZAO2_400x400.jpg" alt="Foto do usuário" />
            Olá Matheus
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => { }} >
            <FaGithub color="#FFB800" />
            Entrar com GitHub
        </button>
    )
}