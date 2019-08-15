import React from 'react';
import { Button } from 'reactstrap';

const Mybutton = (props) => {
    return (
 
   
      
          
        <Button onClick={props.Btn}
        outline color="primary" size="lg">{props.name}</Button>
        
      
    );
  }
export default Mybutton