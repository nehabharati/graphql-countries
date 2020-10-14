import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Country from "./Country"

const Countries = () => (
  <Query
    query={gql`
        {
            Country {
              name
              population 
              capital  
              location {
                latitude
                longitude
              }  
              officialLanguages { 
                name 
              }
              currencies {
                name
                symbol
              }
              regionalBlocs {
                name
                acronym
                otherAcronyms {
                  name
                }
                otherNames {
                  name
                }
              }
              flag {
                emoji
                emojiUnicode
                svgFile
              } 
            }
          }
    `}
  >

    {({ loading, error, data }) => {
      if (loading) return <p className="loading">Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log(data)
      return data.Country.map((country, i) => (
        <Country key={i} country={country} />
      ));
    }}
  </Query>
);

export default Countries;