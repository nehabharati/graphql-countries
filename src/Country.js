import React from 'react'

export default function Country({ country }) {
    return (
        <div className="card-container">
            <div className="card">
                <img src={country.flag.svgFile} alt={country.name} />
                <div className="basic-info">
                    <p>Name: {country.name}</p>
                    <p>Capital: {country.capital}</p>
                    <p>Language: {country.officialLanguages[0].name}</p>
                    <p>Currency: <span>{country.currencies[0].name}</span> - <span style={{ color: "red" }}>{country.currencies[0].symbol}</span></p>
                    <p>Region: {country.regionalBlocs.map(i => `${i.name} - ${i.acronym}`)}</p>
                    <p>Latitude: {country.location.latitude}&deg;</p>
                    <p>Longitude: {country.location.longitude}&deg;</p>
                </div>
            </div>
        </div>
    )
}