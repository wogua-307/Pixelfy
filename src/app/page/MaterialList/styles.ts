import styled from "styled-components";

const MasonryMargin = 16
export const StyledMaterialList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  padding-bottom: 30px;

  .my-masonry-grid {
    display: flex;
    width: auto;
    .my-masonry-grid_column {
      padding-left: ${MasonryMargin}px;
      background-clip: padding-box;
    }
    .my-masonry-grid_column > div {
      margin-bottom: ${MasonryMargin}px;
    }
  }

  .empty-page {
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    font-size: 18px;
    color: #B7B9BD;
  }
`