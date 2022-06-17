import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { ArtistContext } from "../../Game";
import { IArtist, IArtistContext } from "../../Interfaces";

const AdvancedArtist = () => {
  const context = useContext<IArtistContext>(ArtistContext);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<any>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const loading = open && context.artistList.length === 0;

  useEffect(() => {
    if (!open) {
      context.setArtistList([]);
    }
  }, [open]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      context.queryArtist(inputValue);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [inputValue]);

  useEffect(() => {
    if (value) {
      context.setArtist(value.id);
    }
  }, [value]);

  return (
    <Autocomplete
      id="artist-autocomplete"
      sx={{ width: "331px", marginTop: "1em" }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option: IArtist, value) =>
        option.artist === value.artist
      }
      getOptionLabel={(option: IArtist) => option.artist}
      options={context.artistList}
      value={value}
      onChange={(
        event: React.SyntheticEvent<Element, Event>,
        newValue: IArtist | null
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
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for an Artist"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default AdvancedArtist;
