import React from 'react'
import { Container, SectionCategories } from 'components'

import HOME_DATA from '../../database/home-data.json'

export default function Home() {
  return (
    <Container>
      <SectionCategories categories={HOME_DATA} />
    </Container>
  )
}
