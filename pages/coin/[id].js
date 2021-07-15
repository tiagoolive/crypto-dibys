import styles from "./Coin.module.css"
import Layout from "../../components/Layout"


const Coins = ({coin}) => {
    return (
        <Layout>
            <div className={styles.coin_page}>
                <div className={styles.coin_cointainer}>
                    <img className={styles.coin_image} src={coin.image.large} alt={coin.name}/>
                    <p className={styles.coin_name}>{coin.name}</p>
                    <p className={styles.coin_symbol}>{coin.symbol}</p>
                    <p className={styles.coin_price}>{coin.market_data.current_price.usd}</p>
                </div>
            </div>
            
        </Layout>
    )
}

export default Coins

export async function getServerSideProps(context){
    const {id} = context.query

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

    const data = await res.json()

    return{
        props: {
            coin: data
        }
    }
}