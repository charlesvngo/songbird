import React from "react";

// interfaces
import { IGenreSelector } from "../../Interfaces";

// styling
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const GenreSelector = (props: IGenreSelector) => {
  const [alignmenttGenre, setAlignmentGenre] = React.useState<string | null>(
    null
  );
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignmentGenre(newAlignment);
    props.selectGenre(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignmenttGenre}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="pop" aria-label="Pop" color="primary">
        Pop
      </ToggleButton>
      <ToggleButton value="rock" aria-label="Rock" color="primary">
        Rock
      </ToggleButton>
      <ToggleButton value="r&b" aria-label="R&B" color="primary">
        R&B
      </ToggleButton>
      <ToggleButton value="k-pop" aria-label="K-Pop" color="primary">
        K-Pop
      </ToggleButton>
      <ToggleButton value="surprise" aria-label="surprise" color="primary">
        Surprise Me!
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default GenreSelector;
