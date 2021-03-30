import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'
import styles from '../styles/Home.module.css'

export default function Blog(props) {
  return (
    <div className={styles.container}>
      <DefaultLayout title={props.title} description={props.description}>
        <main className={styles.main}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.description}>A blog from a lemon that thinks.</p>
          <div className={styles.grid}>
            {props.posts.map(function(post, idx) {
              return (
              <a className={styles.card} href={'/posts/'+post.slug} key={idx}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </a>
              )
            })}
          </div>
        </main>
      </DefaultLayout>
    </div>
  )
} 

export async function getStaticProps() {
  const config = await getConfig()
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description
    }
  }
}

//<p>List of posts:</p>
//<ul>
//  {props.posts.map(function(post, idx) {
//    return (
//      <li key={idx}>
//        <Link href={'/posts/'+post.slug}>
//          <a>{post.title}</a>
//        </Link>
//      </li>
//    )
//  })}
//</ul>