import React from "react";
import { useAppSelector } from "../../store";
import { getCollectList } from "../../store/reducers/collect";
import { MaterialList } from "../MaterialList";

const CollectPage = () => {
  const collectList = useAppSelector(getCollectList)
  return (
    <MaterialList photos={collectList} />
  )
}

export default CollectPage