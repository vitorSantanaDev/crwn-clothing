import React from 'react'
import { SectionCategories } from 'components'

const mockData = [
  {
    id: String(1),
    action: 'Example',
    title: 'hats',
    urlImageBackground: 'https://i.ibb.co/cvpntL1/hats.png'
  },
  {
    id: String(2),
    action: 'Example',
    title: 'jackets',
    urlImageBackground: 'https://i.ibb.co/px2tCc3/jackets.png'
  },
  {
    id: String(3),
    action: 'Example',
    title: 'sneakers',
    urlImageBackground: 'https://i.ibb.co/0jqHpnp/sneakers.png'
  },
  {
    id: String(4),
    action: 'Example',
    title: 'womens',
    urlImageBackground: 'https://i.ibb.co/GCCdy8t/womens.png'
  },
  {
    id: String(5),
    action: 'Example',
    title: 'mens',
    urlImageBackground: 'https://i.ibb.co/R70vBrQ/men.png'
  }
]

function App() {
  return (
    <div className="App">
      <SectionCategories categories={mockData} />
    </div>
  )
}

export default App
