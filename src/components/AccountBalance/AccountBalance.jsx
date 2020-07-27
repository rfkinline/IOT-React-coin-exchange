import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    font-size: 2rem;
    text-align: center;
    margin: 0 auto 2rem auto;    
    margion-buttom: 2rem;
    line heighth: 3rem;
`;

const Balance = styled.div`
    min-width: 250px;
    margin: 0.5rem 0 0 2.5rem;
    font-size: 1.5em;
    text-align: left;
    vertical-align: middle;
`;

const Button = styled.button`
    margin: 0 8px;
`;

const BalanceToggleButton = styled(Button)`
    width: 150px;
    vertical-align: middle;
`;

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});


export default function AccountBalance(props) {

    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = '\u00A0';
    if (props.showBalance){
        content = <>{formatter.format(props.amount)}</>
    }
    const buttonClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-info');
    return (
       <>
        <Balance>{content}</Balance>
        <Section>
            <BalanceToggleButton 
                onClick={props.handleBalanceVisibiltyChange}
                className={buttonClass}>
                {buttonText}
            </BalanceToggleButton>
            <Button className = "btn btn-success"
                onClick={props.handleBrrrr}>
                <i className="fas fa-hand-holding-usd"></i>
            </Button>
        </Section>
      </>
    )
}

AccountBalance.propTypes = {
    amount: PropTypes.string.isRequired

}