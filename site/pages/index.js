import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rafaelimao</title>
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
          Olá! Eu sou rafael!
        </h1>

        <p className={styles.description}>
          Um escritor, programador e inovador de 12 anos de idade!
        </p>

        <div className={styles.grid}>
          <a href="./about" className={styles.card}>
            <h3>Sobre mim &rarr;</h3>
            <p>Quem sou eu? Bem, depende de quem está perguntando...</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>Um texto de cada vez, eu vou organizar cada ideia dessa cabeça!</p>
          </a>

          <a
            href="https://edstation.com.br"
            className={styles.card}
          >
            <h3>Edstation School &rarr;</h3>
            <p>O projeto em que estou envolvido no momento! Dá uma olhada!</p>
          </a>

          <a
            href="https://mailto:monteiro.rafael2008@gmail.com"
            className={styles.card}
          >
            <h3>Contato &rarr;</h3>
            <p>
              Alguma ideia ou sugestão? Manda um oi aí!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Made with ☕ by Rafael Limão
      </footer>
    </div>
  )
}
