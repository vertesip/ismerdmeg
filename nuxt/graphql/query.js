import gql from 'graphql-tag';

export const attractionQuery = gql`
query attractionQuery {
	attractions{
		data{
			id,
			attributes {
				Title,
        Description,
        Banner {
          data {
            id,
            attributes {
              width,
              height,
              url
            }
          }
        },
        Did_you_know,
        Latitude,
        Longitude
			}
		}
	}
}
`

export const singleAttractionQuery = gql`
query singleAttractionQuery($id: ID!) {
	attraction(id: $id) {
		data{
			id,
			attributes {
				Title,
        Description,
        Banner {
          data {
            id,
            attributes {
              width,
              height,
              url
            }
          }
        },
        Did_you_know,
        Latitude,
        Longitude
			}
		}
	}
}
`