import styled from 'styled-components'
import './App.css'
import MainPage from './MainPage'

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <Layout>
      <MainPage></MainPage>
    </Layout>
  )
}

export default App
