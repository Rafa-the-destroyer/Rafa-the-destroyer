import Head from 'next/head'

import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sobre - Rafaelimao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
          <div>
            <h2>Rafaelimao</h2>
          </div>
          <div>
            <a href='/' className={styles.headerLink}>
              <p>Home</p>
            </a>
          </div>
      </header>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Sobre mim
        </h1>

        <p className={styles.description}>
          Quem? Qunado? Onde?
        </p>

        <div className={styles.dualContent}>
            <div className={styles.dualContentLeft}>
                <div>
                  <img src='./profile.png' className={styles.image} />
                </div>
            </div>
            <div className={styles.dualContentRight}>
                <div>
                    <p>
                        Quem sou eu? Eu sou Rafael Alves de Lima Monteiro, mas pode me chamar de Rafael Limão. Eu sou um criativo que adora escrever desde que me entendo por gente e sempre questionei... tudo. Adoro programar também, assim posso tornar uma realidade digital todas as minhas ideias, por mais estúpidas que sejam.
                    </p>
                </div>
            </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Made with ☕ by Rafael Limão
      </footer>
    </div>
  )
}