import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

import "./style.css"

function RadioButton(){
    const CustomRadio = withStyles({
        root: {
          color: '#FFD3CA',
          '&$checked': {
            color: '#EB8F7A',
          },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);
    
    return(
      <div className="radioOptions">
        <div>
            <CustomRadio
              checked={selectedValue == 'all'}
            />
            <span>Todos</span>
        </div>
        <div>
            <CustomRadio
              checked={selectedValue == 'true'}
            />
            <span>Prioridade</span>
        </div>
        <div>
            <CustomRadio
              checked={selectedValue == 'false'}
            />
            <span>Normal</span>
        </div>
      </div>
        
    );
}


export default RadioButton;