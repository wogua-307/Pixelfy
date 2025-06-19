import React, { forwardRef } from "react"
import { StyledMaterialList } from "./styles"
import Masonry from "react-masonry-css"
import { PhotoCard } from "./PhotoCard"
import { PhotoItem } from "../../../../types/photo"
import { SVG_EMPTY_DRINK } from "../../../component/svg"

interface Props {
  photos: PhotoItem[]
}
export const MaterialList = forwardRef<HTMLDivElement, Props>(({ photos }, ref) => {
  return (
    <StyledMaterialList ref={ref}>
      {
        photos.length 
        ? <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {
              photos.map((item, index) => (
                <PhotoCard key={index} item={item}/>
              ))
            }
          </Masonry>
       :
       <div className="empty-page">{SVG_EMPTY_DRINK}No results to display</div>
      }
      
    </StyledMaterialList>
  )
})