import { FC, useState } from 'react';
import User from '../../Models/users';

type CardProps = {
  user: User;
};

const Card: FC<CardProps> = ({ user }) => {
  const [expanded, setExpanded] = useState(false);
  const [following, setFollowing] = useState(false);
  const [blocked, setBlocked] = useState(false);

  const handleExpand = () => {
    if (!blocked) {
      setExpanded(!expanded);
    }
  };

  const handleFollow = (event: React.MouseEvent) => {
    event.stopPropagation();
    setFollowing(!following);
  };

  const handleBlock = (event: React.MouseEvent) => {
    event.stopPropagation();
    setBlocked(!blocked);
  };

  return (
    <div
      className={`group ${
        blocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      <div
        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
        onClick={handleExpand}
      >
        <img
          src={user.profile_image}
          alt={user.display_name}
          className={`h-full w-full object-cover object-center group-hover:opacity-75 ${
            expanded ? 'cursor-pointer' : ''
          }`}
        />
      </div>
      <h3 className="mt-4 text-lg text-gray-700">
        {user.display_name}
        {following && (
          <span className="ml-2 text-green-500" title="Following">
            &#10003;
          </span>
        )}
      </h3>
      <p className="mt-1 text-sm font-medium text-gray-900">
        Reputation: {user.reputation}
      </p>
      {expanded && (
        <>
          {!blocked ? (
            <>
              {following ? (
                <button
                  className="mt-2 px-2 py-1 rounded bg-blue-500 text-white"
                  onClick={handleFollow}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className="mt-2 px-2 py-1 rounded bg-green-500 text-white"
                  onClick={handleFollow}
                >
                  Follow
                </button>
              )}
              <button
                className="mt-2 ml-2 px-2 py-1 rounded bg-yellow-500 text-black"
                onClick={handleBlock}
              >
                Block
              </button>
            </>
          ) : (
            <button
              className="mt-2 px-2 py-1 rounded bg-gray-300 text-gray-500 cursor-not-allowed"
              disabled
            >
              Blocked
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Card;
