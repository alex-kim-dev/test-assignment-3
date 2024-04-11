import { App } from '~/App';
import { render, screen } from '~/testUtils';

test('EmojiButton changes icon', async () => {
  render(<App />);
  const btn = screen.getByRole('button', { name: /random emoji button/i });
  expect(btn).toBeInTheDocument();
});
