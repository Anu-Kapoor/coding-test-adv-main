import PageContent from '../PageContent';
import { useRouteLoaderData } from 'react-router-dom';
import AddButton from './AddButton';

function HomePage() {
  const token = useRouteLoaderData('root');
  return (
    <PageContent title="Welcome!">
      <p>Browse all our amazing pics!</p>
      
    </PageContent>
  );
}

export default HomePage;
