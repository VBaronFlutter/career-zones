import React from 'react';
import styles from './Button.scss';
import classnames from 'classnames';
interface ButtonProps {
  children?: React.ReactNode;
  type: 'secondary';
  onClick: () => void;
  full?: boolean;
  pushBottom?: '1' | '2';
}

const Button: React.FC<ButtonProps> = ({ children, type, full, onClick, pushBottom, ...rest }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <button
        className={classnames('button', {
          [`button--type-${type}`]: type,
          [`button--full`]: full,
          [`button--push-bottom-${pushBottom}`]: pushBottom
        })}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
