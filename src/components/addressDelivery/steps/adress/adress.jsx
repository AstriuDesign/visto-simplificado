import React, { useEffect, useState } from "react"
import './adress.css'
import { MenuItem, Select, TextField } from "@mui/material";
import InputMask from 'react-input-mask';
import countriesService from "../../../../services/countriesWorld";
import statesService from "../../../../services/StatesWorld";
import citiesService from "../../../../services/citiesWorld";

import { useData } from "../../../../dataContext/dataContext";

function Adress() {

    const { data, updateData } = useData();

    const [address_delivery, setAdressDelivery] = useState(''); // Inicialize o estado local com uma string vazia

    const handleAdressDeliveryChange = (event) => {
    setAdressDelivery(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({address_delivery: event.target.value})
    };

    const [complement_address_delivery, setComplementAdressDelivery] = useState(''); // Inicialize o estado local com uma string vazia

    const handleComplementAdressDeliveryChange = (event) => {
    setComplementAdressDelivery(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({complement_address_delivery: event.target.value})
    };

    const [address_delivery_cep, setAdressDeliveryCep] = useState(''); // Inicialize o estado local com uma string vazia

    const handleAdressDeliveryCepChange = (event) => {
    setAdressDeliveryCep(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({address_delivery_cep: event.target.value})
    };

    const [selectedState, setSelectedState] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("")
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const [countries, setCountries] = useState([])

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
                        <span className="title-header">Endereço de entrega</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>

            <div className="div-marital-padding">
                <div className="div-2-inputs-work">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Endereço de entrega<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" 
                            className="style-select-work" 
                            placeholder="Bairro, rua e número" 
                            variant="outlined"
                            value={data.address_delivery} 
                            onChange={handleAdressDeliveryChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Complemento<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" 
                            className="style-select-work" 
                            placeholder="Preencha um complemento" 
                            variant="outlined"
                            value={data.complement_address_delivery} 
                            onChange={handleComplementAdressDeliveryChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="div-3-inputs-residence">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">País do endereço de entrega<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                                className="style-select-work"
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
                            <span className="span-state">Estado do endereço de entrega<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                                className="style-select-work"
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
                            <span className="span-state">Cidade do endereço de entrega<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                                className="style-select-work"
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
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">CEP<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <InputMask
                                mask="99999-999"
                                maskChar=""
                                value={data.address_delivery_cep}
                                onChange={handleAdressDeliveryCepChange}
                            >
                                {() => <TextField id="outlined-basic" className="input-style-work" placeholder="00000-000" variant="outlined" />}
                            </InputMask>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Adress
