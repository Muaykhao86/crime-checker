import React, { useContext, useEffect } from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import crimeContext from "../contexts/collections/crimeData";



const CrimeTypeTable = (props) => {
  const { isLoading, data, moreData, locations} = props;
  
  return (
    <div className="">
      <table className="table table-inner-Border table-hover">
        <thead>
          {data && (
            <>
              <tr>
                <th>Crime</th>
                <th className="text-right">Count</th>
              </tr>
            </>
          )}
        </thead>
        <tbody>
          {data &&
            data.map((crime, i) => (
               
              <tr onClick={() => moreData(crime.name)} style={{cursor: 'pointer'}} key={i}>
                <td>{crime.name}</td>
                <td className="text-right" key={i + "d"}>
                  {crime.count}
                </td>
              </tr>
              
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrimeTypeTable;
