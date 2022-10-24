import React from 'react';
import { styled } from '@mui/system'

const Wrapper = styled('div')({

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%"
})

const Label = styled('p')({
    fontFamily: 'Raleway, Arial',
    color: "#b9bbbe",
    textTransform: 'uppercase',
    fontWeight: "100",
    fontSize: "16px",
    padding: "20px 0 20px 0"
})

const Input = styled('input')({
    flexGrow: 1,
    height: '40px',
    border: '1px solid black',
    borderRadius: '5px',
    color: '#dcddde',
    background: '#35393f',
    margin: 0,
    fontSize: "16px",
    padding: "0 10px"
})

const InputWithLabel = (props) => {
    const {value, setValue, label, type, placeholder} = props;

    const handleValueChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <Wrapper>
            <Label>{label}</Label>
            <Input 
                value = {value}
                onChange = {handleValueChange}
                type = {type}
                placeholder = {placeholder}
            />
        </Wrapper>
    )
}

export default InputWithLabel;