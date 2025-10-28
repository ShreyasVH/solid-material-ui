import AppBar from './containers/appBar'
import Buttons from './containers/buttons'
import Tabs from './containers/tabs'
import { Container } from "@suid/material"

function App() {
  return (
    <>
        <AppBar />
        <Container>
            <Tabs />
        </Container>
    </>
  )
}

export default App
