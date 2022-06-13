import React from "react";
<<<<<<< HEAD

// styling
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const GenreSelector = () => {
  const [alignment, setAlignment] = React.useState<string | null>("pop");

=======
import { IGenreSelector } from "../../Interfaces";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const GenreSelector = (props: IGenreSelector) => {
  const [alignmenttGenre, setAlignmentGenre] = React.useState<string>("pop");
>>>>>>> 0a6f62d709c887773dd492e2546bcfcd18c3b073
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
