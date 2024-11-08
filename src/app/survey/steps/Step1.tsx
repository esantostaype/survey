'use client'
import { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent } from '@mui/material'
import { LabelForm, TitleForm } from '@/components'

export const Step1 = () => {
  const [ city, setCity ] = useState('')
  const [ state, setState ] = useState('')

  const handleChangeCity = ( event: SelectChangeEvent ) => {
    setCity( event.target.value as string )
  }

  const handleChangeState = ( event: SelectChangeEvent ) => {
    setState( event.target.value as string )
  }
  return (
    <>
      <TitleForm title='General Company Information' />
      <LabelForm label='1. Sector or industry in which your company operates:'/>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Retail" />
        <FormControlLabel control={<Checkbox />} label="Professional Services" />
        <FormControlLabel control={<Checkbox />} label="Health and Wellness" />
        <FormControlLabel control={<Checkbox />} label="Technology" />
        <FormControlLabel control={<Checkbox />} label="Manufacturing" />
        <FormControlLabel control={<Checkbox />} label="Education" />
        <FormControlLabel control={<Checkbox />} label="Hospitality and Tourism" />
        <FormControlLabel control={<Checkbox />} label="Other" />
      </FormGroup>
      <LabelForm label='2. Company size (number of employees):'/>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="1-10" control={<Radio />} label="1-10" />
        <FormControlLabel value="11-50" control={<Radio />} label="11-50" />
        <FormControlLabel value="51-200" control={<Radio />} label="51-200" />
        <FormControlLabel value="201-500" control={<Radio />} label="201-500" />
        <FormControlLabel value="More than 500" control={<Radio />} label="More than 500" />
      </RadioGroup>
      <LabelForm label='3. Primary company location:'/>
      <div className='flex gap-8'>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ city }
            label="City"
            onChange={ handleChangeCity }
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ state }
            label="State"
            onChange={ handleChangeState }
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  )
}