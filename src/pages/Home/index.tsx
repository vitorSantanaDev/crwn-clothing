import React from 'react'
import { SectionCategories } from 'components'

import HOME_DATA from '../../database/home-data.json'

export default function Home() {
  return <SectionCategories categories={HOME_DATA} />
}
