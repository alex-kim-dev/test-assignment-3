import css from '~/App.module.css';
import { EmojiButton } from '~/components/EmojiButton';

export const App = () => {
  return (
    <main className={css.wrapper}>
      <EmojiButton />
    </main>
  );
};
