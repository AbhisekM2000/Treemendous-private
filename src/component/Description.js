import React from 'react';
import Button from './Button';
import styled from 'styled-components'
import {Wrapper,Wrapper_UL,PriceStyle,AddMore} from './Description.styled';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import './Style.css'




const Logo=styled.div`
    justify-content: center;
`
function Description() {
    let price=2999;
    return (
        <div>
            <Wrapper>
                <InnerImageZoom src='/images/Rectangle23.png' zoomType="hover" hideHint="true" className="ImgAttributes"/>
                <div>
                    <h1 style={{fontWeight:'bold'}}>Starter Package</h1>
                    <Wrapper_UL>
                        <li>Six large grow bags with vegetable plants</li>
                        <li>One Pair of Gardening Gloves</li>
                        <li>One 5 liters Watering Can</li>
                        <li>Set of Two Gardening Tools</li> 
                        <li>100ml of Organic Pest Controller (Mix 3ml / 1 liter of water)</li>
                        <li> 500gms of Organic Soil Fertiliser ( Use Once in 15 Days) </li>
                        <li>2kgs of Vermicompost </li>
                        <li>100ml of Organic Plant Growth Booster (Mix 5ml/1 liter of water) </li>
                        <li>500gms of Neem Powder</li>
                    </Wrapper_UL>

                    <PriceStyle>Rs. {price}</PriceStyle>
                    <Button/>
                    <p style={{width:"500px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, vero. Nobis, iusto debitis autem aliquam nulla rem. Quaerat atque modi quam doloremque beatae eos alias. Aperiam, consequuntur maxime? Veniam, iusto.</p>

                    <AddMore>
                        Add more Grow Bags
                        <p>Rs. 799/Grow Bag</p>
                    </AddMore>
                    <Button/>
                </div>
            </Wrapper>
        </div>
    )
}

export default Description


