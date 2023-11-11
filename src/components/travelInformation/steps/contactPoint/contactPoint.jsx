import React, { useEffect, useState } from "react"
import './contactPoint.css'
import { MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import InputMask from 'react-input-mask';
import escortRelationship from '../../../../datas/escort_relationship'
import statesService from "../../../../services/StatesWorld";
import citiesService from "../../../../services/citiesWorld";

import { useData } from "../../../../dataContext/dataContext";

function ContactPoint() {

    const { data, updateData } = useData();

    const [contact_name, setContactName] = useState(''); // Inicialize o estado local com uma string vazia

    const handleContactNameChange = (event) => {
    setContactName(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({contact_name: event.target.value})
    };

    const [contact_last_name, setContactLastName] = useState(''); // Inicialize o estado local com uma string vazia

    const handleContactLastNameChange = (event) => {
    setContactLastName(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({contact_last_name: event.target.value})
    };

    const [address_contact, setAddressContact] = useState(''); // Inicialize o estado local com uma string vazia

    const handleAddressContactChange = (event) => {
    setAddressContact(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({address_contact: event.target.value})
    };

    const [cep_contact, setCepContact] = useState(''); // Inicialize o estado local com uma string vazia

    const handleCepContactChange = (event) => {
    setCepContact(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({cep_contact: event.target.value})
    };

    const [phone_number_contact, setPhoneNumberContact] = useState(''); // Inicialize o estado local com uma string vazia

    const handlePhoneNumberContactChange = (event) => {
    setPhoneNumberContact(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({phone_number_contact: event.target.value})
    };

    const [email_contact, setEmailContact] = useState(''); // Inicialize o estado local com uma string vazia

    const handleEmailContactChange = (event) => {
    setEmailContact(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({email_contact: event.target.value})
    };

    const [selectedState, setSelectedState] = useState("Hotel");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);


    const getStates = async (country) => {
        let _states = await statesService.getStateByCountry("US");
        setStates(_states);
    }

    const getCities = async (country, state) => {
        let _cities = await citiesService.getCitiesByStateByCountry(country, state);
        setCities(_cities);
    }

    const handleChangeSelectState = (event) => {
        setState(event.target.value);
        getCities("US", event.target.value)
    };

    const handleChangeSelectCity = (event) => {
        setCity(event.target.value);
    };


    const handleChangeSelect = (event) => {
        setSelectedState(event.target.value);
    };

    useEffect(() => {
        getStates();
    }, []);

    return (
        <div className="div-margin">
            <div className="padding-bottom">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <span className="title-header">Informações sobre o ponto de contato</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>
            <div className="div-marital-padding">
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Qual será o seu ponto de contato nos EUA?<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-radio-marital">
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Hotel"
                        name="radio-buttons-group"
                        className="subTitle-div-2"
                        row
                        value={selectedState}
                        onChange={handleChangeSelect}
                    >
                        <FormControlLabel value="Hotel" control={<Radio />} label="Hotel" />
                        <FormControlLabel value="Conhecido" control={<Radio />} label="Conhecido" />
                    </RadioGroup>
                </div>
            </div>

            {selectedState === "Hotel" ? (
                <div className="div-marital-padding">
                    <div className="padding-bottom-title-input">
                        <span className="title-header-2">Informação sobre o Hotel</span>
                    </div>
                    <div className="div-2-inputs-work">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Nome do hotel<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" 
                                className="style-select-work" 
                                placeholder="Escreva o nome do hotel" 
                                variant="outlined"
                                value={data.contact_name}
                                onChange={handleContactNameChange} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="div-2-inputs-work">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Estado do hotel<span style={{ color: 'red' }}>*</span></span>
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
                                <span className="span-state">Cidade do hotel<span style={{ color: 'red' }}>*</span></span>
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
                    </div>
                    <div className="div-2-inputs-work">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Endereço do hotel<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" 
                                className="style-select-work"
                                 placeholder="Rua, bairro, número" 
                                 variant="outlined" 
                                 value={data.address_contact}
                                 onChange={handleAddressContactChange}
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
                                    value={data.cep_contact}
                                    onChange={handleCepContactChange}
                                >
                                    {() => <TextField id="outlined-basic" className="style-select-work" placeholder="00000-000" variant="outlined" />}
                                </InputMask>

                            </div>
                        </div>
                    </div>
                    <div className="div-2-inputs-work">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Telefone do hotel<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <InputMask
                                    mask="55+ (99) 99999-9999"
                                    maskChar=""
                                    value={data.phone_number_contact}
                                    onChange={handlePhoneNumberContactChange}
                                >
                                    {() => <TextField id="outlined-basic" className="style-select-work" placeholder="55+ (00) 00000-0000" variant="outlined" />}
                                </InputMask>
                            </div>
                        </div>
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Email do hotel<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" 
                                className="style-select-work" 
                                placeholder="email@exemplo.com" 
                                variant="outlined"
                                value={data.email_contact}
                                onChange={handleEmailContactChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            ) : (

                <div className="div-marital-padding">
                    <div className="padding-bottom-title-input">
                        <span className="title-header-2">Informação sobre o conhecido</span>
                    </div>
                    <div className="div-1-inputs-contact">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Nome do contato<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" 
                                className="input-style-contact" 
                                placeholder="Escreva o primeiro nome" 
                                variant="outlined"
                                 />
                            </div>
                        </div>
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Sobrenome do contato<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" 
                                className="input-style-contact" 
                                placeholder="Escreva sobrenome" 
                                variant="outlined"
                                value={data.contact_last_name} 
                                onChange={handleContactLastNameChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Relação com o contato<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <Select
                                    className="style-select-work"
                                    labelId="select-state"
                                    id="select-state"
                                    value={selectedState}
                                    onChange={handleChangeSelect}
                                >
                                    {escortRelationship.map((state) => (
                                        <MenuItem key={state.key} value={state.key}>
                                            {state.value}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="div-2-inputs-work">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Estado do contato<span style={{ color: 'red' }}>*</span></span>
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
                                <span className="span-state">Cidade do contato<span style={{ color: 'red' }}>*</span></span>
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
                    </div>
                    <div className="div-2-inputs-work">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Endereço do contato<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-select-work" placeholder="Rua, bairro, número" variant="outlined" />
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

                                >
                                    {() => <TextField id="outlined-basic" className="style-select-work" placeholder="00000-000" variant="outlined" />}
                                </InputMask>

                            </div>
                        </div>
                    </div>
                    <div className="div-2-inputs-work">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Telefone do hotel<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <InputMask
                                    mask="55+ (99) 99999-9999"
                                    maskChar=""

                                >
                                    {() => <TextField id="outlined-basic" className="style-select-work" placeholder="55+ (00) 00000-0000" variant="outlined" />}
                                </InputMask>
                            </div>
                        </div>
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Email do hotel<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-select-work" placeholder="email@exemplo.com" variant="outlined" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ContactPoint
