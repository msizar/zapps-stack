import { useEffect, useState } from 'react';

import { getUsers } from '../../Service';
import Card from '../Card';

const mockData = [
  {
    user_id: 1,
    display_name: 'John Doe',
    profile_image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    reputation: 1000,
    location: 'New York, USA',
  },
  {
    user_id: 2,
    display_name: 'Jane Smith',
    profile_image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    reputation: 2000,
    location: 'London, UK',
  },
  {
    user_id: 3,
    display_name: 'Alex Johnson',
    profile_image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    reputation: 1500,
    location: 'Berlin, Germany',
  },
  {
    user_id: 4,
    display_name: 'Emily Davis',
    profile_image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    reputation: 1800,
    location: 'Paris, France',
  },
  {
    user_id: 5,
    display_name: 'Michael Brown',
    profile_image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    reputation: 2200,
    location: 'Tokyo, Japan',
  },
];

interface User {
  user_id: number;
  display_name: string;
  profile_image: string;
  reputation: number;
  location: string;
}

const UsersList = () => {
  const [users, setUsers] = useState<User[]>(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleGetUsers = () => {
      getUsers(currentPage).then(
        (response) => {
          setUsers(response.data.items);
          setTotalPages(response.data.total / response.data.page_size);
          setIsLoading(false);
        },
        (error) => {
          setIsLoading(false);
          if (error?.response?.data?.error_message) {
            setErrorMessage(error.response.data.error_message);
          } else {
            setErrorMessage('Failed to fetch list of users');
          }
        }
      );
    };

    handleGetUsers();
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // if (errorMessage && !isLoading) {
  //   return (
  //     <div className="bg-white">
  //       <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
  //         <h2 className=" text-center capitalize text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
  //           ⛑️ {errorMessage}
  //         </h2>
  //       </div>
  //     </div>
  //   );
  // }

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {users.map((user) => (
            <Card key={user.user_id} user={user}></Card>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <button
            className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
