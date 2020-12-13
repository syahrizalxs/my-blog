import React from 'react'
import trending from '../assets/mocks/trending'
import latest from '../assets/mocks/latest'
import { PostMasonry } from '../components/common'

const trendingConfig = {
  1: {
    gridArea: '1 / 2 / 3 / 3'
  }
}
const latestConfig = {
  1: {
    gridArea: '1 / 4 / 3 / 2'
  }
}

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index]
  })
}

mergeStyles(trending, trendingConfig)
mergeStyles(latest, latestConfig)
export default function Home () {
  return (
    <section className="container home">
      <div className="row">
        <h2>Trending</h2>
        <PostMasonry posts={trending} columns={3} />
      </div>
      <div className="row">
        <h2>Latest</h2>
        <PostMasonry posts={trending} columns={2} />
      </div>
    </section>
  )
}