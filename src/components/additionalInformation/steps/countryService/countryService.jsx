import React, { useEffect, useState } from "react"
import './countryService.css'
import { MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import InputMask from 'react-input-mask';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Countries from "../../../../datas/countries";

import { useData } from "../../../../dataContext/dataContext";

function CountryService() {

    const { data, updateData } = useData();

    const [office_country_service, setOfficeCountryService] = useState(''); // Inicialize o estado local com uma string vazia

    const handleOfficeCountryServiceChange = (event) => {
    setOfficeCountryService(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({office_country_service: event.target.value})
    };

    const [rank_country_service, setRankCountryService] = useState(''); // Inicialize o estado local com uma string vazia

    const handleRankCountryServiceChange = (event) => {
    setRankCountryService(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({rank_country_service: event.target.value})
    };

    const [specialties_country_service, setSpecialtiesCountryService] = useState(''); // Inicialize o estado local com uma string vazia

    const handleSpecialtiesCountryServiceChange = (event) => {
    setSpecialtiesCountryService(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({specialties_country_service: event.target.value})
    };


    const getStates = async () => {
        const response = await statesBrazilianService.getStates();
        setStates(response);
    }

    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [radioRequester, setRadioRequester] = useState("Sim");

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
                        <span className="title-header-1">Serviços ao país</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>
            <div className="div-country-padding">
                <div className="padding-bottom-title-input-country">
                    <span className="title-header-2">Já serviu?<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-radio-marital">
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Sim"
                        name="radio-buttons-group"
                        className="subTitle-div-2"
                        row
                        value={radioRequester}
                        onChange={handleChangeRequester}
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
            </div>
            {radioRequester === "Sim" ? (
                <div>
                    <div className="div-country-padding">
                        <div className="div-2-inputs-work">
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">País que serviu ao exercito<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <Select
                                        className="style-select-work"
                                        labelId="select-state"
                                        id="select-state"
                                        value={selectedState}
                                        onChange={handleChangeSelect}
                                    >
                                        {Countries.map((state) => (
                                            <MenuItem key={state.key} value={state.key}>
                                                {state.value}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Ramo de serviço que serviu ao exercito<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" 
                                    className="style-select-work" 
                                    placeholder="Escreva o ramo"
                                     variant="outlined"
                                     value={data.office_country_service}
                                     onChange={handleOfficeCountryServiceChange} 
                                     />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div-country-padding">
                        <div className="div-2-inputs-work">
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Patente<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" 
                                    className="style-select-work" 
                                    placeholder="Escreva a patente" 
                                    variant="outlined"
                                    value={data.rank_country_service}
                                    onChange={handleRankCountryServiceChange} 
                                    />
                                </div>
                            </div>
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Especialidade<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" 
                                    className="style-select-work" 
                                    placeholder="Escreva a especialidade" 
                                    variant="outlined"
                                    value={data.specialties_country_service} 
                                    onChange={handleSpecialtiesCountryServiceChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="div-country-padding">
                        <div className="div-2-inputs-work">
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Data de inicio no exercito<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker format="DD/MM/YYYY" className="custom-date-picker-initial" />
                                    </LocalizationProvider>
                                </div>
                            </div>
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Data de termino no exercito<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker format="DD/MM/YYYY" className="custom-date-picker-initial" />
                                    </LocalizationProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default CountryService
