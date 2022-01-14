import { Link } from 'react-router-dom'
import styled from 'styled-components'
import palette from '../../lib/styles/palette'

const SubInfoBlock = styled.div`
margin-top:1rem;
color:${palette.gray[6]}

span+span:before{
	color:${palette.gray[4]};
	padding-left: 0.25rem;
	padding-right: 0.25rem;
	content:'\\B7';
}
`

const SubInfo = ({ username, publishedDate, hasMarginTop }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Link to={`/@${username}`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </SubInfoBlock>
  )
}

export default SubInfo
