import React, { useEffect, useState } from "react";

// interfaces
import { IGenreSelector } from "../../Interfaces";

// styling
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

// components
import AdvancedSettings from "./AdvancedSettings";

const GenreSelector = (props: IGenreSelector) => {
  const [advancedSettings, setAdvancedSettings] = useState<boolean>(false);
  const [genre, setGenre] = useState<string | null>(null);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== "advanced-settings") {
      props.selectGenre(newAlignment);
    }
    setGenre(newAlignment);
  };

  useEffect(() => {
    if (genre === "advanced-settings") {
      setAdvancedSettings(true);
    }
    if (genre !== "advanced-settings" && advancedSettings === true) {
      setAdvancedSettings(false);
    }
    return;
  }, [genre]);

  return (
    <>
      <ToggleButtonGroup
        value={genre}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="pop" aria-label="pop" color="primary">
          Pop
        </ToggleButton>
        <ToggleButton value="rock" aria-label="rock" color="primary">
          Rock
        </ToggleButton>
        <ToggleButton value="r-n-b" aria-label="r-n-b" color="primary">
          R&B
        </ToggleButton>
        <ToggleButton value="k-pop" aria-label="k-pop" color="primary">
          K-Pop
        </ToggleButton>
        <ToggleButton
          value="advanced-settings"
          aria-label="advanced-settings"
          color="primary"
        >
          Advanced
        </ToggleButton>
      </ToggleButtonGroup>
      {advancedSettings && <AdvancedSettings genre={genre} />}
    </>
  );
};

export default GenreSelector;
