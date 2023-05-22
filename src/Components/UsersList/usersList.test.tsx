import { render, screen } from '@testing-library/react';
import { getUsers } from '../../Service';
import UsersList from './index';
jest.mock('../../Service');

describe('UsersList component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders error message on API failure', async () => {
    const errorMessage = 'Failed to fetch list of users';
    const getUsersMock = getUsers as jest.MockedFunction<typeof getUsers>;
    getUsersMock.mockRejectedValueOnce({
      response: { data: { error_message: errorMessage } },
    });

    render(<UsersList />);

    const errorMessageElement = await screen.findByText(
      new RegExp(errorMessage, 'i')
    );
    expect(errorMessageElement).toBeInTheDocument();
  });
});
