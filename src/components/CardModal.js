import React, { useState } from 'react';
import styled from 'styled-components';

export function CardModal(props) {

    const [modalState, setModalState] = useState(false);

    const manageState = () => {
        setModalState(!modalState);
    }

    return (
        <CardModalContainer>

            <div className = {`overlay modalShowing-${modalState}`}>
                <div className = 'content'>
                    <div className = 'modal-header'>
                        <h1>{props.modalTitle}</h1>
                        <span onClick = {() => {manageState()}}>X</span>
                    </div>
                    <div className = 'modal-top'>
                        <img src = {props.modalImg1} alt = {props.modalImgAlt1} />
                    </div>
                    <div className = 'modal-info'>
                        <h2>{props.bodyHeader}</h2>
                        <p>{props.bodyP}</p>
                    </div>
                    <button onClick = {() => {manageState()}}>close Modal</button>
                </div>
            </div>

            <div className = 'card'>
                <img src = {props.cardImg1} alt = {props.cardImgAlt1} />
                <h3>{props.cardTitle}</h3>
                <p>{props.cardText}</p>
                <button onClick = {() => {manageState()}}>Open Modal</button>
            </div>
        </CardModalContainer>
    );
}
const CardModalContainer = styled.div `
    .overlay {
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s ease-in-out;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(1, 1, 1, 0.75);
        height: 100%;
        width: 100%;
    }
    .content {
        position: absolute;
        top: 4rem;
        right: 4rem;
        bottom: 4rem;
        left: 4rem;
        background: white;
        overflow: auto;
    }
    .modalShowing-true {
        opacity: 1;
        z-index: 1;
        pointer-events: visible;
    }
    .card {
        width: 22rem;
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 1%;
        background: white;
        img {
            width: 11rem;
            object-fit: contain;
        }
        h3 {

        }
        p {

        }
        button {
            padding: 2rem 5rem;
            
        }
    }
`
