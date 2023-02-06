import GlobalStyles from './styles/Global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';

import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import LogInPage from './pages/LogInPage';
import SignInPage from './pages/SignInPage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Home />
        {/* <Products />
        <Product />
        <LogInPage />
        <SignInPage />
        <CartPage /> */}
      </>
    </ThemeProvider>
  );
};

export default App;
