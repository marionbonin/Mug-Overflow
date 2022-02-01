import
{
  FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';

import './style.scss';

export default function CategoryDropdown() {
  const selectTestValue = 'Nom Catég test';
  return (
    <FormControl fullWidth>
      <InputLabel
        id="demo-simple-select-label"
      >
        Catégorie
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value="catég 1"
        label="Catégorie"
        placeholder={selectTestValue}
        onChange={() => {
          console.log("appel API et modif de l'affichage des produits au changement de catégorie");
        }}
      >
        <MenuItem value="catég 1">Catég 1
        </MenuItem>
        <MenuItem value="catég 2">Catég 2
        </MenuItem>
        <MenuItem value="catég 3">Catég 3
        </MenuItem>
        <MenuItem value="catég 4">Catég 4
        </MenuItem>
      </Select>
    </FormControl>
  )
}
