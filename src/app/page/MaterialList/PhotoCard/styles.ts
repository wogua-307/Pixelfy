import styled from 'styled-components';

export const StyledPhotoCard = styled.div<{paddingtop: number, bgcolor: string}>`
  display: flex;
  width: 128px;
  flex-direction: column;
  align-items: center;
  background-color: ${params => params.bgcolor};
  border-radius: 6px;
  overflow: hidden;
  position: relative; 
  cursor: pointer;

  .mkt-thumbnail {
    width: 100%;
    position: relative;
    padding-top: ${params => params.paddingtop}%;
    overflow: hidden;
    background: #F4F4F5;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all ease .25s;
  }

  .photo-info {
    position: absolute;
    left: 0;
    bottom: -100%;
    width: 100%;
    height: 35px;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    pointer-events: none;
    z-index: 1;
    display: flex;
    align-items: center;
    transition: all ease .25s;
  }

  .photographer {
    margin-top: 5px;
    margin-left: 6px;
    max-width: 90px;
    white-space: nowrap;
    pointer-events: all;
    cursor: pointer;
    font-size: 11px;
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
    &:hover {
      text-decoration: underline;
    }
  }

  .actions {
    position: absolute;
    right: -50%;
    top: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease-in-out .25s;
    /* &:not(.is-collect) {
      transition: all ease-in-out .25s;
    } */
/* 
    &.is-collect {
      right: 8px;
    } */
  }

  &:hover {
    .mkt-thumbnail {
      transform: scale(1.1);
    }
    .photo-info {
      bottom: 0;
    }
    .actions {
      right: 8px;
    }
  }
`