import React, { useState }from 'react';
import styled from 'styled-components';

const StyledCategory = styled.div`

width:100%;
margin:0 16px 16px 16px;
padding: 16px 0 0 0;
background-color: #14213D;
color:#FFFFFF;
border: 1px solid black;
border-radius: 5px;

&:hover{
    background-color: #17284d;
}

.category-header{
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
}

.category-header-info{
    width: 100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:row;
    padding:16px;
}
.category-header-border{
    border-bottom: 5px solid #FFFFFF
}
.category-header-border-active{
    border-bottom: 5px solid #FCA311
}
.category-title{
    margin:0;
}

`

const Category = ({ categoryTitle, amountStatus, entryAmount, children }) => {

    const toggleStyles = ["category-header-border", "category-header-border-active"];

    const [toggleState, setToggleState] = useState(false);

    const toggleCard = () => {
        if(toggleState === false){
            setToggleState(true);
        } else if (toggleState === true){
            setToggleState(false);
        }
    } 

    return(
        <StyledCategory>
            <div className={toggleState===false ? toggleStyles[0] : toggleStyles[1]}>
                <div  onClick={()=>{toggleCard();}} className="category-header">
                    <h4 className="category-title">{categoryTitle}</h4>
                </div>
                <div onClick={()=>{toggleCard();}} className="category-header-info">
                    <div>
                        {entryAmount}
                    </div>
                    <div>
                        {amountStatus}
                    </div>
                </div>
            </div>

            <div>
                {toggleState===true && 
                    <>
                    {children}
                    </>
                }
            </div>
        </StyledCategory>
    );
}
export default Category;