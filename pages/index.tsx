import type { NextPage } from 'next'
import styled from "styled-components"

const Head = styled.div`
  display: flex;
 `

const Home: NextPage = () => {
  return (
    <Head>
      <h1>
        Hello world
      </h1>
    </Head>

  )
}

export default Home
