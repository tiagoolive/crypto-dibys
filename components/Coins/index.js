import styles from './coins.module.css'
import Link from 'next/link'

const index = ({ name, image, symbol, price, marketcap, volume, priceChange, id }) => {
    return (
        <Link href='/coin/[id]' as={`/coin/${id}`}>
            <a>
                <div className={styles.coin_container}>
                    <div className={styles.coin_row}>
                        <div className={styles.coin}>
                            <img className={styles.coin_img} src={image} />
                            <h1 className={styles.coin_h1}>{name}</h1>
                            <p className={styles.coin_symbol}>{symbol}</p>
                        </div>
                        <div className={styles.coin_data}>
                            <p className={styles.coin_price}>${price}</p>
                            <p className={styles.coin_volume}>${volume}</p>
                            {priceChange < 0 ? (
                                <p className={styles.coin_percent, styles.red}>{priceChange.toFixed(2)}%</p>
                            ) : (
                                <p className={styles.coin_percent, styles.green}>{priceChange.toFixed(2)}%</p>
                            )}
                            <p className={styles.coin_marketcap}>Mkt cap: ${marketcap}</p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>

    )
}

export default index