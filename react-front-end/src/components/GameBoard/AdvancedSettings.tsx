import React, { useEffect, useState } from "react";

// interfaces
import { IAdvancedSettings } from "../../Interfaces";

// styling
import { Autocomplete, TextField } from "@mui/material";

// helpers
import { availableGenres } from "../../helpers/availableGenres";

const AdvancedSettings = (props: IAdvancedSettings) => {
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (inputValue) {
      props.selectGenre(inputValue);
    }
  }, [inputValue]);

  return (
    <Autocomplete
      id="advanced-genre-select"
      options={availableGenres}
      value={value}
      onChange={(
        event: React.SyntheticEvent<Element, Event>,
        newValue: string | null
      ) => {
        setValue(newValue);
      }}
      onInputChange={(
        event: React.SyntheticEvent<Element, Event>,
        newInputValue: string
      ) => {
        setInputValue(newInputValue);
      }}
      inputValue={inputValue}
      renderInput={(params) => (
        <TextField {...params} label="Select a genre" placeholder="Genres" />
      )}
      sx={{ width: "331px" }}
    />
  );
};

export default AdvancedSettings;
