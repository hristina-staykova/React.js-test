import React from "react";
import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
// export a modeler page component
// use the Modeler to instantiate a modeler instane

class Modeler extends React.Component {
  componentDidMount() {
    var viewer = new BpmnJS({ container: "section" });
  }

  render() {
    return (
      <div className="p-3">
        <h1>Modeler</h1>
        <section />
      </div>
    );
  }
}

export default Modeler;
