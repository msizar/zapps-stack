import Nav from '../../Components/Nav';
import { Suspense } from 'react';
import UsersList from '../../Components/UsersList';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex-grow p-4">
        <Suspense fallback={<p>loading...</p>}>
          <UsersList />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
