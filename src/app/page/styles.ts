import styled from 'styled-components'

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .source-info {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding-left: 12px;
    background-color: white;
    height: 30px;
    display: flex;
    align-items: center;
    z-index: 2;
    color: #8B8C8F;
    a {
      margin-left: 4px;
      color: #19191A;
    }
  }
`
