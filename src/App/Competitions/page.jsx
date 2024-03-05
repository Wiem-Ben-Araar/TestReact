import axios from "axios";
import React, { useEffect, useState } from "react";

function Competition() {
  const [Competition, setCompetition] = useState([]);
  const handleCompetition = async () => {
    try {
      const compData = await axios.get("http://localhost:3001/competitions");
      console.log(compData.data);
      setCompetition(compData.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  useEffect(() => {
    handleCompetition();
  }, []);
  return (
    <div>

      <table>
        <tr>
          <td> #</td>
          <td> Name</td>
          <td> Fees </td>
          <td> Date </td>
          <td> Details </td>
        </tr>
        {Competition?.map((item, index) => (
          <tr>
            <td>{item?.id}</td>
            <td>{item?.name}</td>
            <td>{item?.fee}</td>
            <td>{item?.date}</td>
            <td>
              <a href="#"> Details</a>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Competition;