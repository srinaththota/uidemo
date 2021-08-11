import './App.css';
import Layout from './components/layout/Layout'
import GlobalStyle from './GlobalStyle';
import { StylesProvider } from '@material-ui/core'
function App() {
  return (
    <>
    <StylesProvider injectFirst>
    <GlobalStyle />
  <Layout />
  </StylesProvider>
    </>
  );
}

export default App;
