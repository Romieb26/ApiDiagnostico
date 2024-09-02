import styled from "styled-components";

const H1Styled = styled.h1`
    margin: 5px 0 0 5px;
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 10px;

    &:hover{
        color: #ff2600;
    }
`

function Title(props) {
    return <H1Styled>{props.text}</H1Styled>
}

export default Title