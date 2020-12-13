import React from 'react'
import MasonryPost from './MasonryPost'

export default function PostMasonry ({ posts, columns, tagsOnTop }) {
  return (
    <section className="masonry" style={{ gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))` }}>
      { posts.map((post, index) => {
          return <MasonryPost {...{post, index, tagsOnTop, key: index}} />
        })
      }
    </section>
  )
}