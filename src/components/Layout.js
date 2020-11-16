import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 5rem auto 4rem auto;
  /* margin-top: clamp(2rem, 10vm, 12rem); */
  background-size: 1500px;
  padding: 5px;
  padding: clamp(5px, 1vm, 25px);
  /* box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.44); */
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Navbar />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  )
}
