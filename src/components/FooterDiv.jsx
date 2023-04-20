import React from 'react'

const FooterDiv = () => {

  const Footer= {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "3rem 0",
  }
  const p = {
    color: "#a5b3ce",
  }

  return (
    <footer style={Footer}>
      <p style={p}>CopyRight @2023</p>
    </footer>
  )
}

export default FooterDiv