import PostsBlock from './posts-block/posts-block';
import Sidebar from './sidebar/sidebar';

import styles from './grid-posts.module.scss';

function GridPosts({ posts, featurePosts, tags }) {
  const categories = posts.map(post => post.category);

  return (
    <section className={styles.container}>
      <PostsBlock posts={posts} />
      <Sidebar
        categories={categories}
        featurePosts={featurePosts}
        tags={tags}
      />
    </section>
  );
}

export default GridPosts;