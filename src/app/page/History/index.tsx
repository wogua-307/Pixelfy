import React, { useEffect, useState } from "react";
import { PhotoItem } from "../../../types/photo";
import { fetchPexelsCurated } from "../../service";
import { MaterialList } from "../container/MaterialList";

const HistoryPage = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>([])
  useEffect(() => {
    const fetchPhotos = async () => {
      const {photos} = await fetchPexelsCurated()
      setPhotos(photos)
    }
    fetchPhotos()
  }, [])

  return (
    <MaterialList photos={photos} />
  )
}

export default HistoryPage