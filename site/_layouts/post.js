import DefaultLayout from '@layouts/default'
import Head from 'next/head'
import styles from '../styles/Post.module.css'

export default function PostLayout(props) {
    return (
      <div className={styles.container}>
        <DefaultLayout className={styles.main}>
          <Head>
            <title>{props.title} - Rafaelimao</title>
          </Head>
          <article className={styles.article}>
            <h1>{props.title}</h1>
            <div dangerouslySetInnerHTML={{__html:props.content}}/>
          </article>
        </DefaultLayout>
      </div>
    )
  }
