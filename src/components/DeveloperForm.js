import React from "react";
import { actiontype } from "../reducers/developReducer";


function DeveloperForm({ dispatch }) {


  const handeleSubmet = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const food = event.target.food.value;
    const technologies = event.target.technologies.value;
    const language = event.target.language.value;
    const drink = event.target.drink.value;
    dispatch({
      type: actiontype.ADD_DEVELOPER,
      payload: {
        name: name,
        food: food,
        technologies: technologies,
        language: language,
        drink: drink
      }
    });
  }

  return (
    <>
      <form onSubmit={handeleSubmet}>
        <input type='text' id='name' placeholder="enter your name" /><br />
        <input type='text' name='food' placeholder="enter your fav Food" /><br />
        <input type='text' name='drink' placeholder="enter your fav drink" /><br />
        <select id="language" name='language'  >
          <option value="not selected">select a language </option>
          <option value="C++">C++</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Java">Java</option>
        </select><br /><br />
        <select id="technologies " name='technologies' >
          <option value="not selected">select a technologies</option>
          <option value="React">React</option>
          <option value="HTTP">HTTP</option>
          <option value="Node">Node</option>
        </select><br /><br />
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  )


}


export default DeveloperForm;


