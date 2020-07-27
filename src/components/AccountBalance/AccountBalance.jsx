import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    background-color: #3a4d74;
    color: #ffffff;
    text-align: left;
    font-size: 2rem;
    padding: 1.5rem 0 1.4rem 5rem;
`;

export default function AccountBalance(props) {

    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if (props.showBalance) {
        content = <>Balance: ${props.amount} </>;
    }
    return (
        <Section>
            {content}  
            <button onClick={props.handleBalanceVisibiltyChange}>{buttonText}</button>
        </Section>
    )
}

AccountBalance.propTypes = {
    amount: PropTypes.string.isRequired

}