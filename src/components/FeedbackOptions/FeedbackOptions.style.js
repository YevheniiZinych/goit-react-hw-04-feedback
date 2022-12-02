import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  /* display: flex; */
  /* gap: 10px; */

  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.62;
  color: var(--main-color);
  padding: 6px 22px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    background-color: blue;
    color: white;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
