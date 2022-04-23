import styled from '@emotion/styled';

export const FeedbackContainer = styled.div`
  /* outline: solid 1px red;
background-color: teal; */
  padding: 20px;
`;

export const FeedbackButtons = styled.div`
  display: flex;
  gap: 20px;
`;

export const FeedbackButton = styled.button`
  padding: 16px 35px;
  background-color: silver;
  box-shadow: 3px 3px 2px #888888;

  :hover {
    background-color: lightgrey;
  }

  cursor: pointer;
  border: solid 1px grey;
  border-radius: 10%;
`;

export const FeedbackLevel = styled.p`
  font-size: 18px;
  padding-left: 20px;
  font-weight: 600;
`;

export const FeedbackStatistics = styled.div`
  padding-top: 20px;
`;

export const NotificationMessage = styled.p`
  font-style: 18px;
  font-weight: 700;
`;
