import React, { useEffect, useState } from "react"
import './anotherName.css'
import {MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";

import { useData } from "../../../../dataContext/dataContext";

function AnotherName () {
    const { data, updateData } = useData();

    const [other_name, setName] = useState(''); // Inicialize o estado local com uma string vazia

    const handleNameChange = (event) => {
    setName(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({other_name: event.target.value})
    };

    const [other_last_name, setLastName] = useState(''); // Inicialize o estado local com uma string vazia

    const handleLastNameChange = (event) => {
    setLastName(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({other_last_name: event.target.value})
    };

    const getStates = async () =>{        
        const response = await statesBrazilianService.getStates();
        setStates(response);        
    }

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
        getStates();
    }, []);

  return (        
        <div className="div-margin">
            <div className="padding-bottom">
                <div style={{display:'flex', justifyContent: 'space-between'}}>
                    <div>
                        <span className="title-header">Informações Pessoais</span>
                    </div>
                    <div>
                        <span className="title-header-1">Outro nome</span>
                    </div>
                </div>
                <hr className="hr-color"/>                
            </div>
            <div className="div-name-padding">
            <div>
                <div className="div-another-padding" style={{paddingBottom:'0.4rem'}}>
                    <span className="span-state">Já teve outro nome?<span style={{color:'red'}}>*</span></span>
                </div>
                <div className="div-another-padding">
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
            </div>
            {selectedState === "Sim" ? (
            <div className="div-name-padding">              
                <div className="padding-bottom-1 div-another-padding">
                    <span className="title-header-2">Outro nome(a)<span style={{color:'red'}}>*</span></span>
                </div>
                <div className="div-grid-another-inputs">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Digite seu antigo primeiro nome<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" 
                            className="input-style-another" 
                            placeholder="Escreva o seu primeiro nome" 
                            variant="outlined" 
                            value={data.other_name} 
                            onChange={handleNameChange}
                            />

                            
                        </div>
                    </div>
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Digite seu antigo sobrenome<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" 
                            className="input-style-another" 
                            placeholder="Escreva o seu sobrenome" 
                            variant="outlined" 
                            value={data.other_last_name} 
                            onChange={handleLastNameChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            ) : null}
        </div>    
        
  )
}

export default AnotherName
