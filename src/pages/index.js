import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  h1 {
    font-size: 1.5em;
    text-align: center;
    color: royalblue;
  }
`

const ButtonsWrapper = styled.div`
  /* font-size: 9em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px; */
  color: royalblue;
  display: flex;
  justify-items: center;
  align-items: center;
`

export default function Home() {
  return (
    <Layout>
      <HomeStyles>
        <h1>Kyrgyz.Travel</h1>
        {/* <ButtonsWrapper>
          <button>
            <Link className="link" to="/companies">
              Tourist Companies
            </Link>
          </button>
          <button>
            <Link className="link" to="/hotels">
              Hotels
            </Link>
          </button>
        </ButtonsWrapper> */}
        <h2>Coming soon...</h2>
      </HomeStyles>
    </Layout>
  )
}
