import Nav from '../../Components/Nav';
import UsersList from '../../Components/UsersList';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex-grow p-4">
        <h1 className="text-4xl font-bold text-center">
          Welcome to the home of Stackerz
        </h1>
        <UsersList />
      </div>
    </div>
  );
};

export default HomePage;
