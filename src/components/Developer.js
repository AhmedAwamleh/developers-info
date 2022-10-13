import React from "react";
import { actiontype } from "../reducers/developReducer";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
function Developer(props) {
  console.log(props)
  return (
    // <li key={props.info.id} onClick={() => props.dispatch({ type: actiontype.REMOVE_DEVELOPER, payload: { id: props.info.id } })}>
    //   {props.info.name}: {props.info.id} : {props.info.language}
    // </li>
    <Card style={{ width: '18rem' }} key={props.info.id} onClick={() => props.dispatch({ type: actiontype.REMOVE_DEVELOPER, payload: { id: props.info.id } })}>

      <Card.Body>
        <Card.Title>{props.info.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.info.food}</ListGroup.Item>
        <ListGroup.Item>{props.info.technologies}</ListGroup.Item>
        <ListGroup.Item>{props.info.language}</ListGroup.Item>
        <ListGroup.Item>{props.info.drink}</ListGroup.Item>
        <ListGroup.Item>{props.info.id}</ListGroup.Item>
      </ListGroup>

    </Card>
  )

}

export default Developer






