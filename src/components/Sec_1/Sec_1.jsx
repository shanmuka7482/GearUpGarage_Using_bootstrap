import React, { useState } from "react";
import ImageMapper from "react-img-mapper";
import Bgimage from "./bg.png";
import Alert from "react-bootstrap/Alert";
import "./Sec_1.css";

const URL = Bgimage;
const MAP = {
  name: "my-map",
  areas: [
    {
      name: "Dent",
      shape: "circle",
      coords: [413, 536, 15],
      fillColor: "rgba(255, 0, 0, 0.5)", // red color
      strokeColor: "rgba(255, 0, 0, 0.5)", // red color
    },
    {
      name: "Dignostics",
      shape: "circle",
      coords: [605, 535, 15],
      fillColor: "rgba(255, 0, 0, 0.5)", // red color
      strokeColor: "rgba(255, 0, 0, 0.5)", // red color
    },
    {
      name: "Detailing",
      shape: "circle",
      coords: [812, 569, 16],
      fillColor: "rgba(255, 0, 0, 0.5)", // red color
      strokeColor: "rgba(255, 0, 0, 0.5)", // red color
    },
    {
      name: "Suspension",
      shape: "circle",
      coords: [1019, 552, 16],
      fillColor: "rgba(255, 0, 0, 0.5)", // red color
      strokeColor: "rgba(255, 0, 0, 0.5)", // red color
    },
    {
      name: "Brakes",
      shape: "circle",
      coords: [1022, 632, 15],
      fillColor: "rgba(255, 0, 0, 0.5)", // red color
      strokeColor: "rgba(255, 0, 0, 0.5)", // red color
    },
  ],
};

const MyApp = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [areaName, setAreaName] = useState("");

  const clicked = (area) => {
    setAreaName(area.name);
    setShowAlert(true);
  };

  return (
    <div style={{ width: "100vw" }}>
      <ImageMapper
        src={URL}
        map={MAP}
        onClick={clicked}
        className="Sec_1Container"
      />
      {showAlert && (
        <Alert variant="dark" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>Hello,we support {areaName}</Alert.Heading>
          <p>
            {`Clicked area: ${areaName}. Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.`}
          </p>
        </Alert>
      )}
    </div>
  );
};

export default MyApp;
