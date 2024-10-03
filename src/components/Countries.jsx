import { useEffect, useRef, useState } from "react";
import Country from "./Country";

import Header from "./header";
import Footer from "./Footer";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [filtaredCountries, setfiltaredCountries] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");

  const openModalClickImage = () => {
    setIsModelOpen(true);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const featchData = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await featchData.json();
      setCountries(data);
      setfiltaredCountries(data);
    };
    fetchCountries();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setsearchQuery(value);
    const filtared = countries.filter((country) => {
      return country?.name?.common.toLowerCase().includes(value.toLowerCase());
    });
    setfiltaredCountries(filtared);
  };

  const handelContryDetails = (countryDetails) => {
    const countryCurrencies = Object.entries(
      countryDetails?.currencies || {}
    ).map((currency) => {
      const [code, { name, symbol }] = currency;
      return { code, name, symbol };
    });

    setCountry({
      ...countryDetails,
      flag: countryDetails?.flags?.png,
      population: countryDetails?.population,
      currencies: countryCurrencies,
    });

    setIsModelOpen(true);
  };

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setIsModelOpen();
    }
  };

  // const filtaredData({region,name: {common} })=>{
  //   if(
  //     region === "Europe"||
  //     region === "Americas"||
  //     common === "Israel"||
  //     common === "India"
  //   ){
  //     return false
  //   }
  //   return true
  // }

  return (
    <>
      <Header
        searchCountry={searchQuery}
        handleSearchChange={handleSearchChange}
      />
      {/* Modal  start*/}
      {isModelOpen && (
        <div
          ref={modalRef}
          onClick={closeModal}
          className="fixed flex-col gap-5 inset-0 bg-gray-800 bg-opacity-90 flex justify-center items-center z-50"
        >
          <button
            className="text-gray-100 hover:text-gray-800 bg-red-600 w-10 h-10 rounded-full font-bold"
            onClick={() => setIsModelOpen(false)}
          >
            X
          </button>
          <div className="bg-gray-200 rounded-tr-3xl rounded-tl-3xl border-none w-80 shadow-lg">
            <img
              className="w-full h-48 rounded-tr-3xl rounded-tl-3xl"
              src={country?.flag}
              alt="Country flag"
            />
            <div className="space-у-2 p-5">
              <div className="flex flex-col justify-center items-center mb-2">
                <h2 className="text-2xl font-bold text-center">
                  {country?.name?.common}
                </h2>
                {/* Display currencies dynamically */}
                <div className="mt-1 flex gap-1 items-center ">
                  <ul className="text-sm">
                    {country?.currencies?.length > 0 ? (
                      country?.currencies?.map(({ code, name, symbol }) => (
                        <li key={code}>
                          ( {name} ({symbol}) - {code} )
                        </li>
                      ))
                    ) : (
                      <p>Currencies not available</p>
                    )}
                  </ul>
                </div>
              </div>
              <p>
                <strong>Region : </strong> {country?.region}
              </p>
              <p>
                <strong>Subregion : </strong>
                {country?.subregion}
              </p>
              <p>
                <strong>Capital : </strong>
                {country?.capital ? country?.capital : "Capital not available"}
              </p>
              <p>
                <strong>Population : </strong> {country?.population}
              </p>
              <p>
                <strong>Area : </strong>
                {country?.area}
              </p>
              <p className="capitalize">
                <strong>Start Of Week : </strong>
                {country?.startOfWeek}
              </p>
              <p>
                <strong>Status : </strong>
                {country?.status}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Modal  end*/}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
        {filtaredCountries
          .sort((a, b) => {
            return a?.population - b?.population; // short by population
          })
          .map((country) => (
            <Country
              key={country.cca3}
              country={country}
              handelContryDetails={handelContryDetails}
              openModalClickImage={openModalClickImage}
            />
          ))}
      </div>
      <Footer />
    </>
  );
};
export default Countries;
