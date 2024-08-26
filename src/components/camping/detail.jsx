import React from "react";
import { useParams } from "react-router-dom";
import { campcarCamping } from "../mock/mockdatacamping";

const CampingDetail = () => {
  const { id } = useParams();

  const data = campcarCamping.maindata;
  // console.log(data);
  // console.log(id);

  const filteredData = data.filter((value) => value.id === parseInt(id));
  console.log(filteredData);

  return (
    <div>
      {filteredData.map((value, index) => {
        return <div key={index}></div>;
      })}
    </div>
  );
};

export default CampingDetail;
