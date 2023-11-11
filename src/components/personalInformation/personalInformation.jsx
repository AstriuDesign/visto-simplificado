import './personalInformation.css'
import React, { useState } from "react"
import InitialInformation from './steps/initialInformation/initialInformation';
import StableUnion from './steps/maritalStatus/stableUnion';
import AnotherName from './steps/anotherName/anotherName';
import Nationality from './steps/nationality/nationality';
import FatherInformation from './steps/fatherInformation/fatherInformation';
import MotherInformation from './steps/motherInformation/motherInformation';
import USAFamily from './steps/USAFamily/USAFamily';
import DistantFamily from './steps/distantFamily/distantFamily';
import Group from './steps/group/group';
import CNH from './steps/CNH/CNH';
import SocialNetwork from './steps/socialNetwork/socialNetwork';
import Married from './steps/maritalStatus/married';
import Divorced from './steps/maritalStatus/divorced';
import Widow from './steps/maritalStatus/widow';

function PersonalInformation (props) {


    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set()); 
    const [maritalStatus, setMaritalStatus] = useState(null)
    const [selectedStatus, setSelectedStatus] = useState('');
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {      
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      if(selectedStatus === "S" && activeStep === 0){
        setActiveStep((prevActiveStep) => prevActiveStep + 2);
      }
      else{
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
      setSkipped(newSkipped);
      console.log(activeStep)
      if(activeStep === 10){
        props.onPersonalChange();
      }
    };
  
    const handleBack = () => {
      if(selectedStatus === "S" && activeStep === 2){
        setActiveStep((prevActiveStep) => prevActiveStep - 2);
      }
      else{
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      }
    }; 
    
   

  const handleStatusChange = (status) => {
    setSelectedStatus(status);    
    handleNextMarital(status)    
  };

    const handleNextMarital = (selectedStatus) => {
       
        if (selectedStatus === 'S') {
          // setActiveStep((prevActiveStep) => prevActiveStep + 2);
        } else if (selectedStatus === 'M') {
          setMaritalStatus(<Married key="married"/>)
        } else if (selectedStatus === 'P') {
          setMaritalStatus(<StableUnion key="stableUnion"/>)
        } else if (selectedStatus === 'W') {
          setMaritalStatus(<Widow key="window"/>)
        }else if (selectedStatus === 'D' || "L") {
          setMaritalStatus(<Divorced key="divorced"/>)
        }
    };
  

    const allComponents = [
        <InitialInformation key="initialInformation" onStatusChange={handleStatusChange}/>,
        maritalStatus,        
        <AnotherName key="anotherName"/>,
        <Nationality key="nationality"/>,
        <FatherInformation key="fatherInformation"/>,
        <MotherInformation key="motherInformation"/>,
        <USAFamily key="USAFamily"/>,
        <DistantFamily key="distantFamily"/>,
        <Group key="group"/>,
        <SocialNetwork key="socialNetwork"/>,
        <CNH key="CNH"/>
    ];

  return (        
    <div className='div-flex'>   
    <div className="div-margin" style={{width:'100%'}}>
        <div >
            {allComponents[activeStep]}    
        </div>

        <div style={{display:'flex', justifyContent:'end', marginRight: '-2rem',paddingBottom:'2rem'}}>
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

export default PersonalInformation
