import Instructions from '../components-readonly/Instructions';
import HomeInfo from '../markdown/Home.md';

const Home = () => {
  return (
    <div className='wrapper'>
      <Instructions renderData={HomeInfo} />
    </div>
  );
};

export default Home;
