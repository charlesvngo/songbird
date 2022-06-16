import React, { useEffect } from "react";

// interfaces
import { IAdvancedSettings } from "../../Interfaces";

// styling
import { Autocomplete, TextField } from "@mui/material";

// helpers
import { availableGenres } from "../../helpers/availableGenres";

const AdvancedSettings = (props: IAdvancedSettings) => {
  const [value, setValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState<string>("");

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