import React from 'react'
import {default as ClientStep1} from './client/Step1';
import {default as CleanerStep1} from './cleaner/Step1';
import {CLIENT, CLEANER} from '../../config/profileTypes';

export const Step1 = (props) => {
    const userType  = props.navigation.getParam('userType', '');
    if(userType === CLIENT){
      return <ClientStep1 {...props} userType={userType} />
    }else if(userType === CLEANER){
      return <CleanerStep1 {...props} userType={userType}/>
    }else{
      console.log('error in navigation');
    }
}

export default Step1;