import React from 'react';
import styles from './Chip.scss';
import classnames from 'classnames';
import Octagon from './components/Octagon';
import Pentagon from './components/Pentagon';

interface ChipProps {
  children?: React.ReactNode;
  disabled?: boolean;
  /* Array of clickable items - clockwise direction */
  onClicks?: [() => void, () => void, () => void, () => void];
  onClick?: () => void;
  rotate?: -5 | 5 | 10 | -10;
  size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
  type?: 'primary' | 'secondary';
}
/**
 * Example:
    <Chip size="x-small" type="secondary">
     Leads Individuals
    </Chip>
 */
const Chip: React.FC<ChipProps> = ({
  children,
  type = 'primary',
  disabled,
  size = 'medium',
  rotate,
  onClicks = [],
  onClick
}) => {
  const [onClickTop, onClickRight, onClickBottom, onClickLeft] = onClicks;
  return (
    <>
      <style jsx>{styles}</style>
      <div
        className={classnames('chip', {
          [`chip--rotate-${rotate}`]: !!rotate,
          [`chip--size-${size}`]: !!size,
          ['chip--disabled']: disabled,
          ['chip--cursor']: onClick
        })}
        onClick={onClick}
      >
        <div className="chip__content">
          <div className="chip__content-box">
            <Pentagon place="top-left" />
          </div>
          <div className="chip__content-box">
            <Pentagon place="top" disabled={disabled} type={type} onClick={onClickTop} />
          </div>
          <div className="chip__content-box">
            <Pentagon place="top-right" />
          </div>
          <div className="chip__content-box">
            <Pentagon place="left" disabled={disabled} type={type} onClick={onClickLeft} />
          </div>
          <div className="chip__content-box">
            <Octagon>{children}</Octagon>
          </div>
          <div className="chip__content-box">
            <Pentagon place="right" disabled={disabled} type={type} onClick={onClickRight} />
          </div>
          <div className="chip__content-box">
            <Pentagon place="bottom-left" />
          </div>
          <div className="chip__content-box">
            <Pentagon place="bottom" disabled={disabled} type={type} onClick={onClickBottom} />
          </div>
          <div className="chip__content-box">
            <Pentagon place="bottom-right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chip;
