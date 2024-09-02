import styled from "styled-components";
import Cards from "../molecules/Cards";
import { useState } from "react";

const SectionStyled = styled.section`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
`;

const DivStyled = styled.div`
    background-color: #70cbcc;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1%;
`;

function SectionCards() {
    const [objects, setObjects] = useState([]);

    if(true){
        fetch('https://dragonball-api.com/api/characters')
        .then(response => {
            if(response.ok){
                return response.json();
            }
        })
        .then(data =>{
            setObjects(data.results);
        })
        .catch(error=> {
            console.log(error)
        })

    }

    return (
    <>
        <DivStyled>
                <SectionStyled>
                {
                    objects.map(item =>
                        <Cards
                        key={item.name}
                        name={item.name}
                        src={item.image}
                        status={item.status}
                        species={item.species}
                        origin={item.origin.name}
                        location={item.location.name}
                        ></Cards>
                    )
                }
                </SectionStyled>
        </DivStyled>
        </>
    )
}

export default SectionCards;