const COUNTRY_ISO = 'https://raw.githubusercontent.com/ozgurakbaba/next-news-pwa/main/public/assets/county-iso.json'

const CountryPicker = ({ data }) => {
    
    console.log(data)

    return(
        <p>{data}</p>
    )
}

export async function getStaticProps() {
    const res = await fetch(COUNTRY_ISO)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data },
    }
}

export default CountryPicker