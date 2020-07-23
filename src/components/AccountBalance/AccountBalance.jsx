import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    background-color: #3a4d74;
    color: #ffffff;
    text-align: left;
    font-size: 2rem;
    padding: 1.5rem 0 1.4rem 5rem;
`;

export default class AccountBalance extends Component {
    render() {
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balalnce';
        let content = null;
        if (this.props.showBalance) {
            content = <>Balance: ${this.props.amount} </>;
        }
        return (
            <Section>
              {content}  
             <button onClick={this.props.handleBalanceVisibiltyChange}>{buttonText}</button>
            </Section>
        );
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.string.isRequired

}