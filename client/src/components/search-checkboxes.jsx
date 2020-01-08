import React from 'react'
import { FormControlLabel, Checkbox } from '@material-ui/core'

const SearchCheckboxes = (props) => {
  const { city, airport } = props.search

  // Handle change event on clicking checkboxes
  const onCheckboxChange = (e) => {
    e.persist();
    if (e.target.checked && (city || airport)) {
      props.setSearch(p => ({ ...p, [e.target.value]: e.target.checked }));
      return;
    }
    if (!e.target.checked && !(!city || !airport)) {
      props.setSearch(p => ({ ...p, [e.target.value]: e.target.checked }));
      return;
    }
  };


  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={city}
            onChange={onCheckboxChange}
            value={"city"}
          />
        }
        label="City"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={airport}
            onChange={onCheckboxChange}
            value={"airport"}
          />
        }
        label="Airport"
      />
    </div>
  )
}

export default SearchCheckboxes
