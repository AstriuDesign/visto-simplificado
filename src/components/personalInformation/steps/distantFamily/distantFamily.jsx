import React, { useEffect, useState } from "react"
import './distantFamily.css'
import { MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import PrimaryOccupation from "../../../../datas/primary_occupation";
import statesService from "../../../../services/StatesWorld";
import citiesService from "../../../../services/citiesWorld";

import { useData } from '../../../../dataContext/dataContext';

function DistantFamily() {

    const { data, updateData } = useData();
       
        
    const [ entity_name, setEntityName] = useState(''); // Inicialize o estado local com uma string vazia

    const handleEntityNameChange = (event) => {
    setEntityName(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({entity_name: event.target.value})
    };

    const [ entity_address, setEntityAddress] = useState(''); // Inicialize o estado local com uma string vazia

    const handleAddressChange = (event) => {
    setEntityAddress(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({entity_address: event.target.value})
    };




    const [radioRequester, setRadioRequester] = useState("Sim");
    const [radioOcupation, setRadioOcupation] = useState("Empregado");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);


    const getStates = async () => {
        debugger
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
    const handleChangeRequester = (event) => {
        setRadioRequester(event.target.value);
    };

    const handleChangeRadioOcupation = (event) => {
        setRadioOcupation(event.target.value);
    };


    useEffect(() => {
        getStates();
    }, []);

    return (
        <div className="div-margin">
            <div className="padding-bottom">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <span className="title-header">Infomações complementares</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>
            <div className="div-distant-padding">
                <div className="padding-bottom-distant">
                    <span className="title-header-2">Você possui algum outro familiar mais DISTANTE nos Estados Unidos?(Ex: TIO;PRIMO;SOBRINHO)<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-bottom-distant">
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Sim"
                        name="radio-buttons-group"
                        // className="subTitle-div-2"
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
                    <div className="div-distant-padding">
                        <div className="padding-bottom-distant">
                            <span className="title-header-2">Qual é a sua principal ocupação?<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-distant">
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Empregado"
                                name="radio-buttons-group"
                                className="subTitle-div-2"
                                row
                                value={radioOcupation}
                                onChange={handleChangeRadioOcupation}
                            >
                                <FormControlLabel value="Estudante" control={<Radio />} label="Estudante" />
                                <FormControlLabel value="Empregado" control={<Radio />} label="Empregado" />
                                <FormControlLabel value="Aposentado" control={<Radio />} label="Aposentado" />
                            </RadioGroup>
                        </div>
                    </div>
                    {radioOcupation === "Empregado" ? (
                        <div>
                            <div className="padding-bottom">
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <span className="title-header">Dados da ocupação</span>
                                    </div>
                                </div>
                                <hr className="hr-color" />
                            </div>
                            <div className="div-distant-padding">
                                <div >
                                    <div className="div-grid-inputs-distant">
                                        <div>
                                            <div style={{ paddingBottom: '0.4rem' }} className="padding-bottom-distant">
                                                <span className="span-state">Área de ocupação<span style={{ color: 'red' }}>*</span></span>
                                            </div>
                                            <div className="padding-bottom-distant">
                                                <Select
                                                    className="input-style-distant"
                                                    labelId="select-state"
                                                    id="select-state"
                                                // value={selectedState}
                                                // onChange={handleChangeSelect}
                                                >
                                                    {PrimaryOccupation.map((state) => (
                                                        <MenuItem key={state.key} value={state.key}>
                                                            {state.value}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ paddingBottom: '0.4rem' }} >
                                                <span className="span-state">Nome da instituição/empresa<span style={{ color: 'red' }}>*</span></span>
                                            </div>
                                            <div>
                                                <TextField id="outlined-basic" 
                                                className="input-style-distant" 
                                                placeholder="Escreva o nome da instituição/empresa" 
                                                variant="outlined"
                                                value={data.entity_name}
                                                onChange={handleEntityNameChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-grid-inputs-distant-2">
                                        <div >
                                            <div style={{ paddingBottom: '0.4rem' }} >
                                                <span className="span-state">Endereço da instituição/empresa<span style={{ color: 'red' }}>*</span></span>
                                            </div>
                                            <div >
                                                <TextField id="outlined-basic" 
                                                className="input-style-distant" 
                                                placeholder="Escreva o endereço" 
                                                variant="outlined"
                                                value={data.entity_address}
                                                onChange={handleAddressChange} 
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ paddingBottom: '0.4rem' }} >
                                                <span className="span-state">Estado da instituição/empresa<span style={{ color: 'red' }}>*</span></span>
                                            </div>
                                            <div >
                                                <Select
                                                    className="input-style-distant"
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
                                        <div >
                                            <div style={{ paddingBottom: '0.4rem' }} >
                                                <span className="span-state">Cidade da instituição/empresa<span style={{ color: 'red' }}>*</span></span>
                                            </div>
                                            <div >
                                                <Select
                                                    className="input-style-distant"
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
                                </div>
                            </div>

                        </div>
                    ) : null}
                </div>
            ) : null}
        </div>
    )
}

export default DistantFamily
