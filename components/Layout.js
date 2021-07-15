import Head from "next/head"
import Link from "next/link"

const Layout = ({children, title = 'Crypto dibys'}) => {
    return (
        <div className='layout'>
            <Head>
                <title>{title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <header className='header'>
                <Link href='/' passHref>
                    <a>
                        <img className='logo' src='https://image.flaticon.com/icons/png/512/187/187813.png' />
                    </a>
                </Link>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout
