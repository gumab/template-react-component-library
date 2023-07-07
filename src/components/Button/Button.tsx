import React from 'react';
import './Button.scss';

export interface ButtonProps {
  label: string;
  substring: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button>
      {props.label}
      <span>{props.substring}</span>
    </button>
  );
}
