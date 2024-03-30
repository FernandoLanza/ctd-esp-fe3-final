import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <label>Name: <input type="text" minLength={6} placeholder="Name" required /></label><br />
        <label>Email: <input type="email" placeholder="Email" required /></label><br />
        <input type="submit" value="Submit" />

      </form>
    </div>
  );
};

export default Form;
