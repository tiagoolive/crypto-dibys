import Coins from './Coins/index'

const CoinList = ({filteredCoins}) => {
    return (
        <>
            {filteredCoins.map(coin => {
                return (
                    <Coins
                        key={coin.id}
                        symbol={coin.symbol}
                        id={coin.id}
                        name={coin.id}
                        image={coin.image}
                        price={coin.current_price}
                        marketcap={coin.market_cap}
                        volume={coin.total_volume}
                        priceChange={coin.market_cap_change_percentage_24h}
                    />
                )
            })}
        </>
    )
}

export default CoinList
