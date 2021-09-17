import styled from 'styled-components'

const Input = styled.input `


    padding: 0.5rem;
    margin: 1rem 0rem;
    width: 20rem;
    height: 3rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    background-color: lightgray;

    :focus {

        background-color: lightblue;
        border: 1px solid darkblue;
        outline: none;
    }

`



interface AuthInputProps {
  label: string;
  value: any;
  required: boolean
  type: 'text' | 'email' | 'password'
  valueChange:(newValue:any) => void
}

export default function AuthInput(props: AuthInputProps) {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <label htmlFor={props.label}>{props.label}</label>
      <Input id={props.label} type={props.type} value={props.value} 
      required={props.required}
      onChange={e => props.valueChange?.(e.target.value)}/>
    </div>
  );
}
