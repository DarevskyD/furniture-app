import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Slider from '../components/Slider';
import Products from '../components/Products';

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Search />
      <Slider />
      <Categories />
      <Products />
    </>
  );
};

export default Home;
