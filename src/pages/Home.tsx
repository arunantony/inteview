import Instructions from '../components-readonly/Instructions';
import HomeInfo from '../markdown/Home.md';

const Home = () => {
  return (
    <>
      <Instructions renderData={HomeInfo} />
    </>
  );
};

export default Home;
