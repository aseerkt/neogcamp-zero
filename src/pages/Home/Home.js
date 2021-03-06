import { ROUTES_DATA } from '../../config/routes';
import HomeItem from './HomeItem';
import './Home.css';

function Home() {
  return (
    <main className='home'>
      <ul className='projects-wrapper'>
        {ROUTES_DATA.map((data, i) => (
          <HomeItem key={data.path + i} routeData={data} />
        ))}
      </ul>
    </main>
  );
}

export default Home;
