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
            modalTitle = 'Modal Three'
            modalImg1 = {''}
            modalImgAlt1 = 'Modal Three'
            bodyHeader = 'Body 3 Title Here'
            bodyP = 'body 3 paragraph'
            cardImg1 = {''}
            cardImgAlt1 = 'card 3 img'
            cardTitle = 'Card Three'
            cardText = 'custom card 3 text here'
            />
            <CardModal 
            modalTitle = 'Modal Four'
            modalImg1 = {''}
            modalImgAlt1 = 'Modal Four'
            bodyHeader = 'Body 4 Title Here'
            bodyP = 'body 4 paragraph'
            cardImg1 = {''}
            cardImgAlt1 = 'card 4 img'
            cardTitle = 'Card Four'
            cardText = 'custom card 4 text here'
            />
            <CardModal 
            modalTitle = 'Modal Five'
            modalImg1 = {''}
            modalImgAlt1 = 'Modal Five'
            bodyHeader = 'Body 5 Title Here'
            bodyP = 'body 5 paragraph'
            cardImg1 = {''}
            cardImgAlt1 = 'card 5 img'
            cardTitle = 'Card Five'
            cardText = 'custom card 5 text here'
            />
            <CardModal 
            modalTitle = 'Modal Six'
            modalImg1 = {''}
            modalImgAlt1 = 'Modal Six'
            bodyHeader = 'Body 6 Title Here'
            bodyP = 'body 6 paragraph'
            cardImg1 = {''}
            cardImgAlt1 = 'card 6 img'
            cardTitle = 'Card Six'
            cardText = 'custom card 6 text here'
            />
            <CardModal 
            modalTitle = 'Modal Seven'
            modalImg1 = {''}
            modalImgAlt1 = 'Modal Seven'
            bodyHeader = 'Body 7 Title Here'
            bodyP = 'body 7 paragraph'
            cardImg1 = {''}
            cardImgAlt1 = 'card 7 img'
            cardTitle = 'Card Seven'
            cardText = 'custom card 7 text here'
            />
            <CardModal 
            modalTitle = 'Modal Eight'
            modalImg1 = {''}
            modalImgAlt1 = 'Modal Eight'
            bodyHeader = 'Body 8 Title Here'
            bodyP = 'body 8 paragraph'
            cardImg1 = {''}
            cardImgAlt1 = 'card 8 img'
            cardTitle = 'Card Eight'
            cardText = 'custom card 8 text here'
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
