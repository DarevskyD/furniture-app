import { useState } from 'react';
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
  const [toggle, setToggle] = useState(false);  

  const toggleClick = () => {
    setToggle(!toggle);
  };

  const handleClick = (e) => {
    if (e.target.classList.value === 'sc-cwSeag dzwSZS') {
      setToggle(!toggle);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles toggle={toggle} />
        <Home
          toggle={toggle}          
          toggleClick={toggleClick}
          handleClick={(e) => handleClick(e)}
        />
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
