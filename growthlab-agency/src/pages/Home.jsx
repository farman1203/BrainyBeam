import { useEffect } from 'react'
import Hero from '../sections/Hero'
import Platforms from '../sections/Platforms'
import Services from '../sections/Services'
import About from '../sections/About'
import Process from '../sections/Process'
import Projects from '../sections/Projects'
import Brands from '../sections/Brands'
import FAQ from '../sections/FAQ'
import Contact from '../sections/Contact'

export default function Home() {
  useEffect(() => { document.title = 'GrowthLab — Digital Marketing Agency' }, [])
  return (
    <>
      <Hero /><Platforms /><Services /><About /><Process /><Projects /><Brands /><FAQ /><Contact />
    </>)
}
