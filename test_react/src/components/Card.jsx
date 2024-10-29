

function Card(props){
    const {CountryName, capital, currency,population, language} = props;
    return (
        <>
            <div className="country-card">
                <h2>{CountryName}</h2>
                <p><strong>Capital:</strong> {capital}</p>
                <p><strong>Currency:</strong> {currency}</p>
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Language:</strong> {language}</p>
            </div>
        </>
    )
}
export default Card;
