import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Ball from '../components/ball'
import MintSection from '../components/mint-section'
import styles from '../styles/Home.module.css'
import { Grid, Toolbar, Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ETH Lottery number</title>
        <meta name="description" content="Mint eth lottery number" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Toolbar/>
      <main>
        <Grid container>
          <Grid item xs={12} md={7} textAlign="center">
            <Ball />
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="h2">
              ETH Lottery
            </Typography>
            <br />
            <Typography variant="body1" fontWeight="bold">
              Supply:{'  '}
              <Typography variant="body2" component="span">
                5000
              </Typography>
            </Typography>
            <br />
            <Typography variant="body2" fontWeight="bold">
              Price:{'  '}
              <Typography variant="body2" component="span">
                0.001 eth each
              </Typography>
            </Typography>
            <br />
            <Typography variant="body2">
              ETH Lottery is a collection where each nft corresponds to a lottery number, there will be more than 5eth in prizes (there will be 5 draws) for whoever has the 5 numbers drawn,  the first draw will take place after the sold out, the more numbers the greater the chances of winning
            </Typography>
            <br />
            <MintSection />
          </Grid>
        </Grid>
      </main>
    </div>
  )
}

export default Home
