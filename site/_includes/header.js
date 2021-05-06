import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <h2>Rafaelimao</h2>
            </div>
            <div className={styles.headerLink}>
                <a href='/'>
                    <p>Home</p>
                </a>
            </div>
        </header>
    )
  }