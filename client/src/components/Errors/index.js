
import "./style.css";

function Errors({ errors }) {
    if (errors.length === 0) {
      return null;
    }
  
    return (
      <div id="errorsDiv">
        <h3>Corrupt Data</h3>
        <ul>
          {errors.map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Errors;