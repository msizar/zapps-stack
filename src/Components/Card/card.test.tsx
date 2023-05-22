import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../Card';
import User from '../../Models/users';

const mockUser: User = {
  user_id: 1,
  display_name: 'John Doe',
  profile_image: 'https://example.com/avatar.jpg',
  reputation: 1000,
  location: 'New York, USA',
};

describe('Card component', () => {
  test('renders user information', async () => {
    render(<Card user={mockUser} />);

    const displayNameElement = await screen.findByText(
      new RegExp(mockUser.display_name, 'i')
    );
    const reputationElement = await screen.findByText(
      new RegExp(`Reputation: ${mockUser.reputation}`, 'i')
    );
    const locationElement = await screen.findByText(
      new RegExp(`Location: ${mockUser.location}`, 'i')
    );

    expect(displayNameElement).toBeInTheDocument();
    expect(reputationElement).toBeInTheDocument();
    expect(locationElement).toBeInTheDocument();
  });

  test('expands/collapses on click', () => {
    render(<Card user={mockUser} />);

    const cardElement = screen.getByText(mockUser.display_name);

    // Card should initially be collapsed
    expect(cardElement).not.toHaveClass('cursor-pointer');

    // Click on the card to expand
    fireEvent.click(cardElement);

    // Card should be expanded
    expect(cardElement).toHaveClass('cursor-pointer');

    // Click on the card again to collapse
    fireEvent.click(cardElement);

    // Card should be collapsed
    expect(cardElement).not.toHaveClass('cursor-pointer');
  });

  test('follows/unfollows on button click', () => {
    render(<Card user={mockUser} />);

    const followButton = screen.getByText('Follow');

    // Click on the follow button to follow the user
    fireEvent.click(followButton);

    // Follow button should change to unfollow button
    expect(screen.getByText('Unfollow')).toBeInTheDocument();

    // Click on the unfollow button to unfollow the user
    fireEvent.click(screen.getByText('Unfollow'));

    // Unfollow button should change back to follow button
    expect(screen.getByText('Follow')).toBeInTheDocument();
  });

  test('blocks/unblocks on button click', () => {
    render(<Card user={mockUser} />);

    const blockButton = screen.getByText('Block');

    // Click on the block button to block the user
    fireEvent.click(blockButton);

    // Blocked button should be displayed
    expect(screen.getByText('Blocked')).toBeInTheDocument();

    // Click on the blocked button (should not trigger expand/collapse)
    fireEvent.click(screen.getByText(mockUser.display_name));

    // Card should still be blocked and not expanded
    expect(screen.getByText('Blocked')).toBeInTheDocument();
    expect(screen.queryByText(`Reputation: ${mockUser.reputation}`)).toBeNull();

    // Click on the block button again to unblock the user
    fireEvent.click(blockButton);

    // Blocked button should be removed
    expect(screen.queryByText('Blocked')).toBeNull();
  });
});
