import React, { useEffect, useState } from "react"
import './motherInformation.css'
import { MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import relativeUSStatus from '../../../../datas/relative_us_status'

import { useData } from '../../../../dataContext/dataContext';

function MotherInformation() {       

    const { data, updateData } = useData();
       
    const [ mother_name, setMotherName] = useState(''); // Inicialize o estado local com uma string vazia

    const handleMotherNameChange = (event) => {
    setMotherName(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({mother_name: event.target.value})
    };

    const [ mother_last_name, setMotherLastName] = useState(''); // Inicialize o estado local com uma string vazia

    const handleMotherLastNameChange = (event) => {
    setMotherLastName(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({mother_last_name: event.target.value})
    };

    const [selectedMaritalStatus, setSelectedMaritalStatus] = useState("");
    const [radioRequester, setRadioRequester] = useState("Sim");

    const handleChangeSelect = (event) => {
        setSelectedMaritalStatus(event.target.value);
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
                        <span className="title-header">Informação adicionais da sua mãe</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>
            <div className="div-family-padding">
                <div className="padding-bottom-family">
                    <span className="title-header-2">Você tem informações básica sobre sua mãe?<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-bottom-family">
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
                <div className="div-family-padding">
                    <div className="div-family-inputs">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Nome da sua mãe<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div >
                                <TextField id="outlined-basic" 
                                className="input-style-family" 
                                placeholder="Escreva o primeiro nome" 
                                variant="outlined"
                                value={data.mother_name} 
                                onChange={handleMotherNameChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Sobrenome da sua mãe<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div >
                                <TextField id="outlined-basic" 
                                className="input-style-family" 
                                placeholder="Escreva o sobrenome" 
                                variant="outlined"
                                value={data.mother_last_name}
                                onChange={handleMotherLastNameChange} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div-family-padding">
                    <div className="div-family-inputs">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Qual a data de nascimento da sua mãe<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker format="DD/MM/YYYY" className="custom-date-picker" />
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div-family-padding">
                    <div>
                        <div className="padding-bottom-family">
                            <span className="title-header-2">Sua mãe está nos Estados Unidos?<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-family">
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
                <div className="div-family-padding">
                    <div className="div-family-inputs">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Qual a situação da sua mãe nos Estados Unidos<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div >
                                <Select
                                    className="style-select-initial input-style-initial"
                                    placeholder="teste"
                                    value={selectedMaritalStatus}
                                    onChange={handleChangeSelect}
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
                </div>
            </div>
            ) : null}
        </div>
    )
}

export default MotherInformation
