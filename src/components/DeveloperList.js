import React from "react";
import Developer from "./Developer";

function DeveloperList(props) {
  console.log(props)
  return props.devInfo.length ? (
    <div>
      <ul>
        {props.devInfo.map(info => (
          <Developer key={info.id} info={info} dispatch={props.dispatch} />
        ))
        }
      </ul>
    </div>
  ) : <h3>the list is empty!</h3>
}

export default DeveloperList