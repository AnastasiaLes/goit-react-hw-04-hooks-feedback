import React from 'react';
import { FeedbackLevel, FeedbackStatistics } from '../App/App.styled';

export const FeedbackStatictics = ({
  good,
  neutral,
  bad,
  total,
  percentage,
}) => (
  <FeedbackStatistics>
    <h2>Statictics</h2>
    <FeedbackLevel>Good: {good}</FeedbackLevel>
    <FeedbackLevel>Neutral: {neutral}</FeedbackLevel>
    <FeedbackLevel>Bad: {bad}</FeedbackLevel>
    <FeedbackLevel>Total: {total}</FeedbackLevel>
    <FeedbackLevel>Positive Feedback {percentage}%</FeedbackLevel>
  </FeedbackStatistics>
);
