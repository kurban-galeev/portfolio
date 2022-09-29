import type { NextPage } from 'next'
import styled from "styled-components"
import { HomeScreen } from '../src/screen'

const Head = styled.div`
  display: flex;
 `

const Home: NextPage = () => {
  return (
    <>
      <HomeScreen />
    </>


  )
}

export default Home
