import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 32px;
`;

export const GalleryItem = styled.li`
  border-radius: 6px;
  transition: transform 0.25s linear;
  box-shadow: 1px 4px 6px rgb(0 0 0 / 16%), 0 4px 4px rgb(0 0 0 / 6%),
    0 1px 1px rgb(0 0 0 / 12%);
  color: inherit;
  list-style-type: none;
`;
export const GalleryInfo = styled.p`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  font-size: 12px;
  color: firebrick;
`;
