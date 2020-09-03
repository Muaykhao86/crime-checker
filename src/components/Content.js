import React, { useContext, useState, Fragment, memo } from "react";
import LoadingSpinner from "./Loading";
import useInput from "../hooks/inputHook";
import CrimeTypeTable from "./CrimeTypeTable";
import * as halfmoon from "halfmoon";
import find from "array.prototype.find";


let antiSocialBehaviour = [];
let bicycleTheft = [];
let burglary = [];
let criminalDamageArson = [];
let drugs = [];
let otherTheft = [];
let possessionOfWeapons = [];
let publicOrder = [];
let robbery = [];
let shoplifting = [];
let theftFromThePerson = [];
let vehicleCrime = [];
let violentCrime = [];
let otherCrime = [];
let locations = [];

export default function Content() {
  const [state, setState] = useState({
    loading: undefined,
    useableData: undefined,
    error: undefined,
    focusCrime: undefined,
  });

  let crimes = [];

  let d = new Date();
  let month = d.getMonth();
  let year = d.getFullYear();
  let monthIs = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fetchCoords = async (value) => {
    let postCode = `https://api.postcodes.io/postcodes/${value
      .toLowerCase()
      .trim()}`;

    try {
      let res = await fetch(postCode);
      let data = await res.json();

      data.status === 200 && (await fetchData(data));
      if (data !== 200) throw new Error(data.error);
    } catch (error) {
      await setState({
        loading: undefined,
        error: error,
      });
    }
  };

  const fetchData = async (data) => {
    let coords = {
      lat: data.result.latitude,
      lng: data.result.longitude,
    };
    let url = await `https://data.police.uk/api/crimes-street/allCrime?lat=${coords.lat}&lng=${coords.lng}&date=2020-07`;

    try {
      const gotCoords = async () => {
        const res = await fetch(url);
        const data = await res.json();
        crimes = [...data];
        await pushData();
      };
      (await coords.lat) != undefined && gotCoords();
    } catch (error) {
      await setState({
        loading: undefined,
        error: error,
      });
    }
  };

  const pushData = async () => {
    await crimes.forEach((crime) => {
      switch (crime.category) {
        case "anti-social-behaviour":
          antiSocialBehaviour.push(crime);
          break;
        case "bicycle-theft":
          bicycleTheft.push(crime);
          break;
        case "burglary":
          burglary.push(crime);
          break;
        case "criminal-damage-arson":
          criminalDamageArson.push(crime);
          break;
        case "drugs":
          drugs.push(crime);
          break;
        case "other-theft":
          otherTheft.push(crime);
          break;
        case "possesion-of-weapons":
          possessionOfWeapons.push(crime);
          break;
        case "public-order":
          publicOrder.push(crime);
          break;
        case "robbery":
          robbery.push(crime);
          break;
        case "shoplifting":
          shoplifting.push(crime);
          break;
        case "vehicle-crime":
          vehicleCrime.push(crime);
          break;
        case "violent-crime":
          violentCrime.push(crime);
          break;
        case "theft-from-the-person":
          theftFromThePerson.push(crime);
          break;
        case "other-crime":
          otherCrime.push(crime);
          break;
        default:
          break;
      }
    });
    formatData();
  };

  const formatData = async () => {
    let formattedData = [
      {
        name: "anti-social-behaviour",
        count: antiSocialBehaviour.length,
        crimes: [...antiSocialBehaviour],
      },
      {
        name: "bicycle-theft",
        count: bicycleTheft.length,
        crimes: [...bicycleTheft],
      },
      { name: "burglary", count: burglary.length, crimes: [...burglary] },
      {
        name: "criminal-damage-arson",
        count: criminalDamageArson.length,
        crimes: [...criminalDamageArson],
      },
      { name: "drugs", count: drugs.length, crimes: [...drugs] },
      {
        name: "other-theft",
        count: otherTheft.length,
        crimes: [...otherTheft],
      },
      {
        name: "posession-of-weapons",
        count: possessionOfWeapons.length,
        crimes: [...possessionOfWeapons],
      },
      {
        name: "public-order",
        count: publicOrder.length,
        crimes: [...publicOrder],
      },
      { name: "robbery", count: robbery.length, crimes: [...robbery] },
      {
        name: "shoplifting",
        count: shoplifting.length,
        crimes: [...shoplifting],
      },
      {
        name: "theft-from-the-person",
        count: theftFromThePerson.length,
        crimes: [...theftFromThePerson],
      },
      {
        name: "vehicle-crime",
        count: vehicleCrime.length,
        crimes: [...vehicleCrime],
      },
      {
        name: "violent-crime",
        count: violentCrime.length,
        crimes: [...violentCrime],
      },
      {
        name: "other-crime",
        count: otherCrime.length,
        crimes: [...otherCrime],
      },
    ];

    await setState({
      loading: false,
      useableData: formattedData,
    });
  };


  const moreData = () => {
    return async (crime) => {
     let crimeType = state.useableData.find(({ name }) => name === crime);

     return crimeType.crimes.map(crime => {
       locations.push(crime.location.street.name)
     })
       
     
    }
  };

 


  const { value, bind, reset } = useInput("");

  const CrimeTypeTableWithSpinner = memo(LoadingSpinner(CrimeTypeTable));

  const handleSubmit = (event) => {
    event.preventDefault();
    antiSocialBehaviour = [];
    bicycleTheft = [];
    burglary = [];
    criminalDamageArson = [];
    drugs = [];
    otherTheft = [];
    possessionOfWeapons = [];
    publicOrder = [];
    robbery = [];
    shoplifting = [];
    theftFromThePerson = [];
    vehicleCrime = [];
    violentCrime = [];
    otherCrime = [];

    setState({
      loading: true,
    });
    toastSuccessAlert();
    reset();
    fetchCoords(value);
  };

  const toastSuccessAlert = () => {
    halfmoon.initStickyAlert({
      content: `Checking Postcode ${value}`,
      title: "Checking Please wait",
      alertType: "alert-primary",
      fillType: "filled-dm",
    });
  };


  return (
    <div className="content-wrapper">
      <div className="content">
        <header className="d-flex justify-content-center align-items-center">
          <section className="hero-header">
            <h1>Check Now</h1>
          </section>
        </header>
      </div>
      <div className="content">
        <h2 className="content-title">Check Crime In Your Area</h2>
        <p>
          Enter your postcode and we will display the types of crimes that have
          been commited in your local area in the month of {monthIs[month - 2]}{" "}
          {year}.
          <br />
          You can then click the type of crime and discover which streets have
          been affected.
        </p>
      </div>
      <div className="content w-md-400">
        <form onSubmit={handleSubmit} className="form-inline flex-shrink-1 ">
          <input
            type="text"
            className="form-control "
            {...bind}
            placeholder="Enter your postcode..."
          />
          <button className="btn btn-primary" type="submit">
            Go
          </button>
        </form>
        {state.error && (
          <h3 className="invalid-feedback">{state.error.message}</h3>
        )}
      </div>
      <div className="content">
        <CrimeTypeTableWithSpinner
          locations={locations}
          moreData={moreData(state)}
          isLoading={state.loading}
          data={state.useableData}
        />
      </div>
    </div>
  );
}
