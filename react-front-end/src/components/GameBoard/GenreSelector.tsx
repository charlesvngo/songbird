import React from "react";

// styling
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const GenreSelector = () => {
  const [alignment, setAlignment] = React.useState<string | null>("pop");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
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
