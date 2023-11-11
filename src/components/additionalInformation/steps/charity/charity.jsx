import React, { useEffect, useState } from "react"
import './charity.css'
import { MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import {
    GetCountries,
    GetState,
    GetCity,
    GetLanguages, 
  } from "react-country-state-city";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function Charity() {
    const getStates = async () => { 
        debugger    
        GetLanguages().then((result) => {
            setLanguageList(result);
            console.log(result)
          });
    }
    const [languageList, setLanguageList] = useState([]);
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
 
    const [selectedState, setSelectedState] = useState("");
    const [radioRequester, setRadioRequester] = useState("");

    const handleChangeSelect = (event) => {
        setSelectedState(event.target.value);
    };

    const handleChangeRequester = (event) => {
        setRadioRequester(event.target.value);
    };

    useEffect(() => {
        getStates();
    }, []);

    return (
        <div className="div-margin">
            <div className="padding-bottom">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <span className="title-header">Informações adicionais</span>
                    </div>
                    <div>
                        <span className="title-header-1">Caridade</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>
            <div className="div-country-padding">
                <div className="padding-bottom-title-input-country">
                    <span className="title-header-2">Você participa de alguma organização de caridade?<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-radio-marital">
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Sim"
                        name="radio-buttons-group"
                        className="subTitle-div-2"
                        row
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
            </div>
            <div className="div-country-padding">
                <div className="padding-charity">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Idiomas que você fala<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                                className="style-select-travels"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput />}
                                MenuProps={MenuProps}
                            >
                                {languageList.map((item, index) => (
                                    <MenuItem
                                        key={item.name}
                                        value={item.name}
                                        style={getStyles(item.name, personName, theme)}
                                    >
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charity
