import { findIconDefinition, library } from '@fortawesome/fontawesome-svg-core';
import {
  far as faRegularIconPack,
  type IconName,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type MouseEventHandler, useState } from 'react';

import { genRandomInRange } from '~/utils';

import css from './EmojiButton.module.css';

const DELAY = 3000;

library.add(faRegularIconPack);

const iconNames = Object.values(faRegularIconPack).map(
  (iconDefinition) => iconDefinition.iconName,
);

export const EmojiButton: React.FC = () => {
  const [iconName, setIconName] = useState<IconName>('star');
  const [shouldAnimateIcon, setAnimateIcon] = useState(true);
  const iconDef = findIconDefinition({ prefix: 'far', iconName });

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    const randomIndex = genRandomInRange(0, iconNames.length);
    setTimeout(() => {
      setIconName(iconNames[randomIndex]);
      setAnimateIcon(true);
    }, DELAY);
  };

  return (
    <button
      aria-label='Random emoji button'
      className={css.button}
      type='button'
      onClick={handleClick}>
      <FontAwesomeIcon
        className={`${css.icon} ${shouldAnimateIcon ? css.pop : ''}`}
        icon={iconDef}
        size='5x'
        aria-hidden
        onAnimationEnd={() => setAnimateIcon(false)}
      />
    </button>
  );
};
