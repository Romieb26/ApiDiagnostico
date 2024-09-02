import styled from "styled-components";
import Imagen from "../atoms/Imagen"
import Info from "../atoms/Information"
import Point from "../atoms/Point"
import Title  from "../atoms/Title";
import SubInformation from "../atoms/SubInformation";

const DivStyled = styled.div`
    background-color: #080808;
    border-radius: 8px;
    margin: 25px auto;
    width: 45%;
    display: flex;
    max-height: 285px;
`;

const ContainerImageStyled = styled.div`
    border-radius: 8px 0 0 8px;
    margin: 0;
    width: 280px;
    height: 100%;
`;

const ContainerDataStyled = styled.div`
    padding: 1%;
    border-radius: 8px;
    width: 80%;
`;

const SpanDivStyled = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
`;

function Cards(props) {
    let color = "";

    switch(props.status){
        case "Alive":
            color = "green";
            break;
        case "unknown":
            color = "gray";
            break;
        case "Dead":
            color = "red";
            break;
        default:
            console.log("Estatus no encontrado");
    }

    return <DivStyled key={props.key}>
        <ContainerImageStyled>
        <Imagen src={props.src}></Imagen>
        </ContainerImageStyled>
        
        <ContainerDataStyled>
            <Title text={props.name}></Title>
            <SpanDivStyled>
                <Point color={color}></Point>
                <Info text={props.status}></Info>
                <Info text=" - "></Info>
                <Info text={props.species}></Info>
            </SpanDivStyled>
            <SubInformation text="Last know location:"></SubInformation>
            <Info text={props.origin}></Info>
            <SubInformation text="First see in:"></SubInformation>
            <Info text={props.location}></Info>
        </ContainerDataStyled>
    </DivStyled>
}

export default Cards