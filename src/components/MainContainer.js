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
            bodyHeader = 'Body 1 Title Here'
            bodyP = 'body 1 paragraph'
            cardImg1 = {''}
            cardImgAlt1 = 'card 1 img'
            cardTitle = 'Card One'
            cardText = 'custom card 1 text here'
            />
            <CardModal 
            modalTitle = 'Modal Two'
            modalImg1 = {''}
            modalImgAlt1 = 'Modal Two'
            bodyHeader = 'Body 2 Title Here'
            bodyP = 'body 2 paragraph'
            cardImg1 = {''}
            cardImgAlt1 = 'card 2 img'
            cardTitle = 'Card Two'
            cardText = 'custom card 2 text here'
            />
            <CardModal 
            modalTitle = 'Modal Two'
            modalImg1 = {''}
            modalImgAlt1 = 'Modal Two'
            bodyHeader = 'Body 2 Title Here'
            bodyP = 'body 2 paragraph'
            cardImg1 = {''}
            cardImgAlt1 = 'card 2 img'
            cardTitle = 'Card Two'
            cardText = 'custom card 2 text here'
            />
            <CardModal 
            modalTitle = 'Modal Two'
            modalImg1 = {''}
            modalImgAlt1 = 'Modal Two'
            bodyHeader = 'Body 2 Title Here'
            bodyP = 'body 2 paragraph'
            cardImg1 = {''}
            cardImgAlt1 = 'card 2 img'
            cardTitle = 'Card Two'
            cardText = 'custom card 2 text here'
            />
            <CardModal 
            modalTitle = 'Modal One'
            modalImg1 = {''}
            modalImgAlt1 = 'Modal One'
            bodyHeader = 'Body 1 Title Here'
            bodyP = 'body 1 paragraph'
            cardImg1 = {''}
            cardImgAlt1 = 'card 1 img'
            cardTitle = 'Card One'
            cardText = 'custom card 1 text here'
            />
            <CardModal 
            modalTitle = 'Modal Two'
            modalImg1 = {''}
            modalImgAlt1 = 'Modal Two'
            bodyHeader = 'Body 2 Title Here'
            bodyP = 'body 2 paragraph'
            cardImg1 = {''}
            cardImgAlt1 = 'card 2 img'
            cardTitle = 'Card Two'
            cardText = 'custom card 2 text here'
            />
            <CardModal 
            modalTitle = 'Modal Two'
            modalImg1 = {''}
            modalImgAlt1 = 'Modal Two'
            bodyHeader = 'Body 2 Title Here'
            bodyP = 'body 2 paragraph'
            cardImg1 = {''}
            cardImgAlt1 = 'card 2 img'
            cardTitle = 'Card Two'
            cardText = 'custom card 2 text here'
            />
            <CardModal 
            modalTitle = 'Modal Two'
            modalImg1 = {''}
            modalImgAlt1 = 'Modal Two'
            bodyHeader = 'Body 2 Title Here'
            bodyP = 'body 2 paragraph'
            cardImg1 = {''}
            cardImgAlt1 = 'card 2 img'
            cardTitle = 'Card Two'
            cardText = 'custom card 2 text here'
            />
        </CardsContainer>
    );
}

const CardsContainer = styled.div `
    display: flex;
    background: lightgray;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: space-around;

`
