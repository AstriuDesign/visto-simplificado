import React, { useEffect, useState } from "react"
import './formation.css'
import { MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import InputMask from 'react-input-mask';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import countriesService from "../../../../services/countriesWorld";
import statesService from "../../../../services/StatesWorld";
import citiesService from "../../../../services/citiesWorld";

import { useData } from "../../../../dataContext/dataContext";

function Formation() {

    const { data, updateData } = useData();

    const [institution_name, setInstitutionName] = useState(''); // Inicialize o estado local com uma string vazia

    const handleInstitutionNameChange = (event) => {
    setInstitutionName(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({institution_name: event.target.value})
    };

    const [institution_course, setInstitutionCourse] = useState(''); // Inicialize o estado local com uma string vazia

    const handleInstitutionCourseChange = (event) => {
    setInstitutionCourse(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({institution_course: event.target.value})
    };

    const [institution_address, setInstitutionAddress] = useState(''); // Inicialize o estado local com uma string vazia

    const handleInstitutionAddressChange = (event) => {
    setInstitutionAddress(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({institution_address: event.target.value})
    };

    const [institution_cep, setInstitutionCep] = useState(''); // Inicialize o estado local com uma string vazia

    const handleInstitutionCepChange = (event) => {
    setInstitutionCep(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({institution_cep: event.target.value})
    };

    const [institution_phone_number, setInstitutionPhoneNumber] = useState(''); // Inicialize o estado local com uma string vazia

    const handleInstitutionPhoneNumberChange = (event) => {
    setInstitutionPhoneNumber(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({institution_phone_number: event.target.value})
    };

    const [institution_email, setInstitutionEmail] = useState(''); // Inicialize o estado local com uma string vazia

    const handleInstitutionEmailChange = (event) => {
    setInstitutionEmail(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({institution_email: event.target.value})
    };

    const [selectedState, setSelectedState] = useState("Sim");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("")
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
        let _countries = await countriesService.getCountries();
        setCountries(_countries);
    }

    const getStates = async (country) => {
        let _states = await statesService.getStateByCountry(country);
        setStates(_states);
    }

    const getCities = async (country, state) => {
        let _cities = await citiesService.getCitiesByStateByCountry(country, state);
        setCities(_cities);
    }

    const handleChangeSelectCountry = (event) => {
        setCountry(event.target.value);
        getStates(event.target.value)
    };

    const handleChangeSelectState = (event) => {
        setState(event.target.value);
        getCities(country, event.target.value)
    };

    const handleChangeSelectCity = (event) => {
        setCity(event.target.value);
    };

    const handleChangeSelect = (event) => {
        setSelectedState(event.target.value);
    };


    useEffect(() => {
        getCountries()
    }, []);

    return (
        <div className="div-margin">
            <div className="padding-bottom">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <span className="title-header">Informações adicionais</span>
                    </div>
                    <div>
                        <span className="title-header-1">Formação</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>
            <div className="div-marital-padding">
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Já se formou no ensino médio ou faculdade?<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-radio-marital">
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Sim"
                        name="radio-buttons-group"
                        className="subTitle-div-2"
                        row
                        value={selectedState}
                        onChange={handleChangeSelect}
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
            </div>
            {selectedState === "Sim" ? (
                <div className="div-marital-padding">
                    <div className="padding-bottom-title-input">
                        <span className="title-header-2">Formação</span>
                    </div>
                    <div className="div-2-inputs-work">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Nome da instituição de ensino<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" 
                                className="style-select-work" 
                                placeholder="Escreva o nome da instituição" 
                                variant="outlined"
                                value={data.institution_name} 
                                onChange={handleInstitutionNameChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Curso de formação<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" 
                                className="style-select-work" 
                                placeholder="Escreva o curso de formação" 
                                variant="outlined"
                                value={data.institution_course} 
                                onChange={handleInstitutionCourseChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="div-2-inputs-work">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Data de inicio da sua formação<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker format="DD/MM/YYYY" className="custom-date-picker-initial" />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Data de termino da sua formação<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker format="DD/MM/YYYY" className="custom-date-picker-initial" />
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div>
                    <div className="div-1-inputs-marital">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Pais da instituição de ensino<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <Select
                                    className="input-style-work"
                                    labelId="select-state"
                                    id="select-state"
                                    value={country}
                                    onChange={handleChangeSelectCountry}
                                >
                                    {countries.map((countrie, index) => (
                                        <MenuItem key={index} value={countrie.iso2}>
                                            {countrie.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Estado da instituição de ensino<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <Select
                                    className="input-style-work"
                                    labelId="select-state"
                                    id="select-state"
                                    value={state}
                                    onChange={handleChangeSelectState}
                                >
                                    {states.map((state, index) => (
                                        <MenuItem key={index} value={state.iso2}>
                                            {state.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Cidade da instituição de ensino<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <Select
                                    className="input-style-work"
                                    labelId="select-state"
                                    id="select-state"
                                    value={city}
                                    onChange={handleChangeSelectCity}
                                >
                                    {cities.map((city, index) => (
                                        <MenuItem key={index} value={city.name}>
                                            {city.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="div-2-inputs-work">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Endereço da instituição de ensino<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" 
                                className="style-select-work" 
                                placeholder="Escreva o endereço" 
                                variant="outlined"
                                value={data.institution_address} 
                                onChange={handleInstitutionAddressChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">CEP<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <InputMask
                                    mask="99999-999"
                                    maskChar=""
                                    value={data.institution_cep}
                                    onChange={handleInstitutionCepChange}
                                >
                                    {() => <TextField id="outlined-basic" className="style-select-work" placeholder="00000-000" variant="outlined" />}
                                </InputMask>
                            </div>
                        </div>
                    </div>
                    <div className="div-2-inputs-work">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Telefone da companhia/organização<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <InputMask
                                    mask="55+ (99) 99999-9999"
                                    maskChar=""
                                    value={data.institution_phone_number}
                                    onChange={handleInstitutionPhoneNumberChange}
                                >
                                    {() => <TextField id="outlined-basic" className="style-select-work" placeholder="55+ (00) 00000-0000" variant="outlined" />}
                                </InputMask>
                            </div>
                        </div>
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Email da companhia/organização<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" 
                                className="style-select-work" 
                                placeholder="email@exemplo.com" 
                                variant="outlined"
                                value={data.institution_email}
                                onChange={handleInstitutionEmailChange} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Formation
