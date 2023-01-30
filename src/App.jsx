import GlobalStyles from './styles/Global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';

import Home from './pages/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Home />
      </>
    </ThemeProvider>
  );
};

export default App;
