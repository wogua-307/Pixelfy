import React, { useEffect, useState } from "react"
import { StyledMaterialList } from "./styles"
import Masonry from "react-masonry-css"
import { PhotoCard } from "./PhotoCard"
import { fetchPexelsCurated } from "../../service"
import { PhotoItem } from "../../../types/photo"

export const MaterialList = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>([])
  useEffect(() => {
    const fetchPhotos = async () => {
      const {photos} = await fetchPexelsCurated()
      setPhotos(photos)
    }
    fetchPhotos()
  }, [])
  return (
    <StyledMaterialList>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {
          photos.map((item, index) => (
            <PhotoCard key={index} item={item}/>
            // <div key={index} style={{width: '128px', height: `${Math.floor(Math.random() * 101) + 100}px`, background: 'red'}}>Item {index}</div>
          ))
        }
      </Masonry>
    </StyledMaterialList>
  )
}