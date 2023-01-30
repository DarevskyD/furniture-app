import Announcement from '../components/home/Announcement';
import Categories from '../components/home/Categories';
import Navbar from '../components/home/Navbar';
import Search from '../components/home/Search';
import Slider from '../components/home/Slider';
import Products from '../components/home/Products';

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
