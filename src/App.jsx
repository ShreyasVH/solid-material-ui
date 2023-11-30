import AppBar from './containers/appBar'
import Buttons from './containers/buttons'
import { Container } from "@suid/material"

function App() {
  return (
    <>
        <AppBar />
        <Container>
            <Buttons />
        </Container>
    </>
  )
}

export default App
