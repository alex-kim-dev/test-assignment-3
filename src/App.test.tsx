import { App } from '~/App';
import { render, screen } from '~/testUtils';

test('Shows greeting on the page', async () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    /hello world/i,
  );
});
