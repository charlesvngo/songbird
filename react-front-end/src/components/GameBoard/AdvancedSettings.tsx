import React, { useEffect } from "react";
import { IAdvancedSettings } from "../../Interfaces";
import { Autocomplete, TextField } from "@mui/material";
import { availableGenres } from "../../helpers/availableGenres";

const AdvancedSettings = (props: IAdvancedSettings) => {
  const [value, setValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState<string>("");

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <Autocomplete
      id="advanced-genre-select"
      options={availableGenres}
      value={value}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      inputValue={inputValue}
      renderInput={(params) => (
        <TextField {...params} label="Select a genre" placeholder="Genres" />
      )}
      sx={{ width: "500px" }}
    />
  );
};

export default AdvancedSettings;
