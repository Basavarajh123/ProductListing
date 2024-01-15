
import styled from 'styled-components'

export const ListContainer= styled.ul`


    list-style-type: none;
    display: flex;
    flex-direction:${(props)=>(props.view)};
    flex-wrap:wrap;
    justify-content:center;


`