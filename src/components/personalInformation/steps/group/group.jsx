import React, { useEffect, useState } from "react"
import './group.css'
import { MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

import { useData } from "../../../../dataContext/dataContext";

function Group() {

    const { data, updateData } = useData();

    const [clan, setClan] = useState(''); // Inicialize o estado local com uma string vazia

    const handleClanChange = (event) => {
    setClan(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({clan: event.target.value})
    };

    const getStates = async () => {
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
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <span className="title-header">Grupo, clã ou tribo?</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>
            <div className="div-group-padding">
                <div className="div-flex-inputs-group">
                    <div>
                        <div className="padding-bottom-1">
                            <span className="title-header-2">Você pertence a algum grupo, clã ou tribo<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
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
                    <div className="div-flex-inputs-group">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Qual grupo, clã ou tribo você pertence?<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" 
                                className="input-style" 
                                placeholder="Digite aqui o seu grupo, clã ou tribo" 
                                variant="outlined" 
                                value={data.clan}
                                onChange={handleClanChange}
                                />
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Group
