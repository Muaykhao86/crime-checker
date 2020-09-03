import React from "react";

const CrimeTypeTable = (props) => {
  const { focus, setFocus, data, moreData } = props;

  return focus.length ? (
    <>
    <div className="d-flex justify-content-end">
      <button className="btn btn-primary right" onClick={() => setFocus([])}>
        Go Back
      </button>
    </div>
      <table className="table table-inner-Border">
        <thead>
          {focus && (
            <>
              <tr>
                <th>Area</th>
                <th className="text-right">Count</th>
              </tr>
            </>
          )}
        </thead>
        <tbody>
          {focus &&
            focus.map((place, i) => (
              <tr key={i}>
                <td>{place.area}</td>
                <td className="text-right" key={i + "d"}>
                  {place.count}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  ) : (
    <>
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
              <tr
                onClick={() => moreData(crime.name)}
                style={{ cursor: "pointer" }}
                key={i}
              >
                <td>{crime.name}</td>
                <td className="text-right" key={i + "d"}>
                  {crime.count}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default CrimeTypeTable;
