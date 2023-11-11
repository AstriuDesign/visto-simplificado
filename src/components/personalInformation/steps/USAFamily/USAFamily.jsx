import React, { useEffect, useState } from "react"
import './USAFamily.css'
import { MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import relativeRelationship from '../../../../datas/relative_relationship'
import relativeUSStatus from '../../../../datas/relative_us_status'

import { useData } from '../../../../dataContext/dataContext';


function USAFamily() {

    const { data, updateData } = useData();
       
    const [ immediate_relatives_name, setImmediateRelativesName] = useState(''); // Inicialize o estado local com uma string vazia

    const handleImmediateRelativesNameChange = (event) => {
    setImmediateRelativesName(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({immediate_relatives_name: event.target.value})
    };

    const [ immediate_relatives_last_name, setImmediateRelativesLastName] = useState(''); // Inicialize o estado local com uma string vazia

    const handleImmediateRelativesLastNameChange = (event) => {
    setImmediateRelativesLastName(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({immediate_relatives_last_name: event.target.value})
    };


    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("Sim");
    const [radioRequester, setRadioRequester] = useState("");

    const handleChangeSelect = (event) => {
        setSelectedState(event.target.value);
    };

    const handleChangeRequester = (event) => {
        setRadioRequester(event.target.value);
    };

    useEffect(() => {
        
    }, []);

    return (
        <div className="div-margin">
            <div className="padding-bottom">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <span className="title-header">Familiar nos Estados Unidos</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>
            <div className="div-usa-padding">
                <div className="padding-usa">
                    <span className="title-header-2">Você tem algum familiar direto nos Estados Unidos?(Esposo(a);noivo(a);filho(a);irmão(a);)<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-usa">
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
                <div className="div-usa-padding">
                    <div >
                        <div className="div-grid-usa-inputs">
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Nome do familiar nos Estados Unidos<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div >
                                    <TextField id="outlined-basic" 
                                    className="input-style-usa" 
                                    placeholder="Escreva o primeiro nome" 
                                    variant="outlined" 
                                    value={data.immediate_relatives_name}
                                    onChange={handleImmediateRelativesNameChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Sobrenome do familiar nos Estados Unidos<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div >
                                    <TextField id="outlined-basic" 
                                    className="input-style-usa" 
                                    placeholder="Escreva o sobrenome" 
                                    variant="outlined"
                                    value={data.immediate_relatives_last_name}
                                    onChange={handleImmediateRelativesLastNameChange} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="div-grid-usa-inputs">
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Qual a sua relação com o familiar nos Estados Unidos?<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div >
                                    <Select
                                        className="style-select-initial input-style-initial"
                                        placeholder="teste"

                                    >
                                        {relativeRelationship.map((status) => (
                                            <MenuItem key={status.key} value={status.key}>
                                                {status.value}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Qual a sua situação com o familiar nos Estados Unidos?<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div >
                                    <Select
                                        className="style-select-initial input-style-initial"
                                        placeholder="teste"

                                    >
                                        {relativeUSStatus.map((status) => (
                                            <MenuItem key={status.key} value={status.key}>
                                                {status.value}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="padding-usa">
                                <span className="title-header-2">Possui algum outro nos Estados Unidos?(Esposo(a);noivo(a);filho(a);irmão(a);)<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-usa">
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
                    </div>
                </div>
            ) : null}

        </div>
    )
}

export default USAFamily
