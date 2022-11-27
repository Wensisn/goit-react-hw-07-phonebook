import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 20px;
`;

export const GalleryItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;
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
  font-size: 18px;
  color: black;
`;

export const GalleryButton = styled.button`
  margin-left: 40px;
  font-size: 18px;
  background-color: bisque;
  border: 2px solid burlywood;
`;
