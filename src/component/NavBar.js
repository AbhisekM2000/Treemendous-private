import React from 'react'
import styled from 'styled-components'

const Navigation=styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 50px;
    padding-top: 10px;
    border: 2px solid palevioletred;
  border-radius: 3px;
`
function NavBar() {
    return (
        <div>
            <Navigation>
            <h3>Treemendous</h3>
            <h3>Shop</h3>
            <h3>Kitchen garden</h3>
            <h3>Garden Setup</h3>
            <h3>Coorporate</h3>
            <h3>Contact us</h3>
            </Navigation>

        </div>
    )
}

export default NavBar
