import React, { useEffect, useState } from "react"
import './socialNetwork.css'
import {MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";

import { useData } from "../../../../dataContext/dataContext";

function SocialNetwork () {

    const { data, updateData } = useData();

    const [instagram, setInstagram] = useState(''); // Inicialize o estado local com uma string vazia

    const handleInstagramChange = (event) => {
    setInstagram(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({instagram: event.target.value})
    };

    const [twitter, setTwitter] = useState(''); // Inicialize o estado local com uma string vazia

    const handleTwitterChange = (event) => {
    setTwitter(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({twitter: event.target.value})
    };

    const [linkedin, setLinkedin] = useState(''); // Inicialize o estado local com uma string vazia

    const handleLinkedinChange = (event) => {
    setLinkedin(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({linkedin: event.target.value})
    };

    const [facebook, setFacebook] = useState(''); // Inicialize o estado local com uma string vazia

    const handleFacebookChange = (event) => {
    setFacebook(event.target.value); // Atualize o estado com o valor do campo de texto
    updateData({facebook: event.target.value})
    };

    const getStates = async () =>{        
        const response = await statesBrazilianService.getStates();
        setStates(response);        
    }

    const [states, setStates] = useState([]);
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
                <div style={{display:'flex', justifyContent: 'space-between'}}>
                    <div>
                        <span className="title-header">Redes sociais</span>
                    </div>
                </div>
                <hr className="hr-color"/>                
            </div>
            <div className="div-social-padding">               
                <div className="div-grid-social-inputs">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Instagram</span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" 
                            className="input-style-social" 
                            placeholder="@Exemplo" 
                            variant="outlined"
                            value={instagram} 
                            onChange={handleInstagramChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Twitter</span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" 
                            className="input-style-social" 
                            placeholder="@Exemplo" 
                            variant="outlined"
                            value={twitter}
                            onChange={handleTwitterChange} 
                            />
                        </div>
                    </div>        
                </div>
                <div className="div-grid-social-inputs">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Linkedin</span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" 
                            className="input-style-social" 
                            placeholder="Seu nome no linkedin" 
                            variant="outlined"
                            value={linkedin}
                            onChange={handleLinkedinChange} 
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Facebook</span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" 
                            className="input-style-social" 
                            placeholder="Seu nome no facebook" 
                            variant="outlined"
                            value={facebook}
                            onChange={handleFacebookChange} 
                            />
                        </div>
                    </div>                
                </div>
            </div>     
        </div>    
  )
}

export default SocialNetwork
