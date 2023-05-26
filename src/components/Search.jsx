import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, GEO_API_OPTIONS } from "../api";

export function Search({ cityChange }) {
  const [search, setSearch] = useState(null);

  const handleOnChange = (value) => {
    setSearch(value);
    cityChange(value);
  };

  const loadOptions = async (currSearch) => {
    try {
      const results = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${currSearch}`,
        GEO_API_OPTIONS
      );
      const resutls_1 = await results.json();
      return {
        options: resutls_1.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Search For City..."
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: "transparent",
            backgroundColor: "#F5F5F5",
            color: "#242424",
            fontWeight: "400",
          }),
        }}
      />
    </div>
  );
}
