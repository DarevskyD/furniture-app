import Announcement from '../components/home/Announcement';
import Header from '../components/home/Header';
import SelectedProduct from '../components/products/SelectedProduct';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/home/Footer';

const Product = () => {
  return (
    <>
      <Announcement />
      <Header />
      <SelectedProduct/>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
