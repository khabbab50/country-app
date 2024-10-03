import { useState } from "react";
/* eslint-disable react/prop-types */
const Country = ({ country, handelContryDetails, openModalClickImage }) => {
  const [toggols, settoggols] = useState(false);

  const handelButtonClick = () => {
    settoggols(!toggols);
    handelContryDetails(country);
  };

  return (
    <div className="border bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-gray-500 border-none">
      <img
        className="w-full h-40 cursor-pointer rounded-tl-xl rounded-tr-xl shadow-lg shadow-gray-500"
        src={country?.flags?.png}
        alt={country?.flags?.alt}
        onClick={openModalClickImage}
      />
      <div className="p-5">
        <h1 className="text-xl font-bold mb-1">{country?.name?.common}</h1>
        <h2>
          <strong>Capital:</strong> {country?.capital}
        </h2>
        <h3 className="mb-5">
          <strong>Population:</strong> {country?.population}
        </h3>
        <button
          disabled={toggols && "Vsited"}
          className={
            `border px-4 py-2 bg-blue-900 text-white w-full rounded-xl font-bold border-none ` +
            (toggols ? ` bg-red-600 cursor-not-allowed ` : "")
          }
          onClick={handelButtonClick}
        >
          {toggols ? "Vsited" : "Details"}
        </button>
      </div>
    </div>
  );
};

export default Country;
