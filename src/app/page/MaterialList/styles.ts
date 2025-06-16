import styled from "styled-components";

const MasonryMargin = 16
export const StyledMaterialList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

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
`