import gql from 'graphql-tag';

export const attractionQuery = gql`
query attractionQuery {
	attractions{
		id,
		  Title,
		  Description,
		Banner{    
		  id
		  width
		  height
		  url
		},
		  Did_you_know,
		  Latitude
		  Longitude
	}
}
`

export const singleAttractionQuery = gql`
query singleAttractionQuery {
	Attraction(id: "1") {
		id,
		  Title,
		  Description,
		Banner{    
		  id
		  width
		  height
		  url
		},
		  Did_you_know,
		  Latitude
		  Longitude
	}
}`
