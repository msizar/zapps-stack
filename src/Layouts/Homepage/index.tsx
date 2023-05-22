import Nav from '../../Components/Nav';
import UsersList from '../../Components/UsersList';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex-grow p-4">
        <UsersList />
      </div>
    </div>
  );
};

export default HomePage;
