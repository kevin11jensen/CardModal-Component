import React from 'react';
import styled from 'styled-components';
import { CardModal } from './CardModal';

export function MainContainer() {
    return (
        <CardsContainer>
            <CardModal 
            modalTitle = 'Modal One'
            modalImg1 = {''}
            modalImgAlt1 = 'Modal One'
            bodyHeader = 'Body Title Here'
            bodyP = 'body paragraph'
            cardImg1 = {''}
            cardImgAlt1 = 'card 1 img'
            cardTitle = 'Card One'
            cardText = 'custom card text here'
            />
        </CardsContainer>
    );
}

const CardsContainer = styled.div `

`
