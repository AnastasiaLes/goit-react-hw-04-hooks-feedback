import React from 'react';
import { nanoid } from 'nanoid';
import { Capitalized } from './Button.styled';

import { FeedbackButtons, FeedbackButton } from '../App/App.styled';

export const Controls = ({ options, onLeaveFeedback }) => (
  <FeedbackButtons>
    {options.map(option => (
      // console.log(option);
      <FeedbackButton
        key={nanoid()}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        <Capitalized>{option}</Capitalized>
      </FeedbackButton>
    ))}
  </FeedbackButtons>
);
