import styled from "styled-components";

interface ContainerProps {
    done: boolean;
}

export const Container = styled.div<ContainerProps>`
        display: flex;
        background-color: #20212C;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        align-items: center;
    
        label {
            color: #CCC;
            text-decoration: ${props => props.done ? 'line-through' : 'initial'};  
        }
    
        input {
            width: 25px;
            height: 25px;
            margin-right: 5px;
        }
    `   
