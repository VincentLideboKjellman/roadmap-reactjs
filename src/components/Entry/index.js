import React from 'react';
import styled from 'styled-components';

const StyledEntry = styled.div`
background-color: #29354E;

display:flex;
justfiy-content: center;
align-items: center;

border: 1px solid #E5E5E5;
border-radius: 5px;

color:#FFFFFF;
margin:16px;

text-align:center;

.entry-container{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
}
.entry-item{
    margin:16px;
}
`

const Entry = ({ entryHeader, image, tasksCompleted, status, entrySummary }) => {

    return(
        <StyledEntry>
            <div className="entry-container">
                <h4 className="entry-item">{entryHeader}</h4>
                <img src={image} alt=""></img>
                <div>
                    {tasksCompleted}
                </div>
                <div>
                    status: {status}
                </div>
                <div className="entry-item">
                {entrySummary}
                </div>
            </div>
        </StyledEntry>
    )
}

export default Entry;