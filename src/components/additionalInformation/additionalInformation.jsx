import React, { useEffect, useState } from "react"
import './additionalInformation.css'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";
import statesBrazilianService from "../../services/statesBrazilianService";
import Charity from "./steps/charity/charity";
import Work from "./steps/work/work";
import Formation from "./steps/formation/formation";
import CountryService from "./steps/countryService/countryService";


function AdditionalInformation (props) {

    

    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set()); 
    const [maritalStatus, setMaritalStatus] = useState(null)

  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {      
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
    
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      
      setSkipped(newSkipped);
      console.log(activeStep)
      if(activeStep === 3){
        props.onAdditionalChange();
      }
    };
  
    const handleBack = () => {    
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }; 
    
    const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusChange = (status) => {
    setSelectedStatus(status);  
  };

    const allComponents = [
        <Work key="work"/>,
        <Formation key="formation"/>,
        <CountryService key="countryService"/>,        
        <Charity key="charity"/>
    ];

  return (        
    <div className='div-flex'>   
    <div className="div-margin" style={{width:'100%'}}>
        <div >
            {allComponents[activeStep]}    
        </div>

        <div style={{display:'flex', justifyContent:'end', marginRight: '-2rem', paddingBottom:'2rem'}}>
          <div style={{paddingRight:'1rem'}}>
            <button 
            type='button'
            className='button-style'
            disabled={activeStep === 0}
            onClick={handleBack}
            style={{display: activeStep === 0 ? 'none' : ''}}
            >
            <span className='font-button'>Voltar</span>
            </button>
          </div>
          <div>
            <button 
            type='button'
            className='button-style'
            onClick={handleNext}
            >
                <span className='font-button'>{'Próxima'}</span>
            </button>  
          </div>
        </div>
    </div>
</div>      
  )
}

export default AdditionalInformation
