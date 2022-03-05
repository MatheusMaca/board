import Link from 'next/link'
import styles from './styles.module.scss'

export function SupportButton() {
    return (
        <div className={styles.donateContainer}>
            <Link href="/donete">
                <button>Apoiar</button>
            </Link>
        </div>
    )
}