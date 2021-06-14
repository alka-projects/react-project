import React, { useState } from 'react'
import './Incdec.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

function IncDec() {

    const [num, setNum] = useState(0)

    const Increment = () => {
        setNum(num + 1)
    }

    const Decrement = () => {
        if (num === 0) {
            alert("number limit reached")
        }
        else {
            setNum(num - 1)
        }
    }

    return (
        <div className="center">
            <div className="con">
                <h1> {num} </h1>
                <Tooltip title="Incremnt">
                    <Button variant="contained" color="secondary" onClick={Increment}>
                        <AddIcon />
                    </Button>
                    {/* <Button onClick={Increment}><AddIcon/> </Button> */}
                </Tooltip>
                <Tooltip title="Decrement">
                    <Button onClick={Decrement}><RemoveIcon /> </Button>
                </Tooltip>
            </div>
        </div>
    )
}

export default IncDec
