
import React from "react";
import {Form, Button} from 'react-bootstrap';


function MyForm(props){
return (
  <div className="container">
  <Form>
    <div className="form-group">
      <label htmlFor="search"><h2>Search For and Save Your Favorite Books!</h2></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search for a Book!"
        id="search"
      />
      <Button onClick={props.handleFormSubmit}>
        Search
        </Button>
    </div>
  </Form>
  </div>
);
}

export default MyForm;