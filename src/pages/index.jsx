import React from 'react';
import PropTypes from 'prop-types';
import { Analytics } from "@vercel/analytics/react"
import styles from 'styles/Home.module.css';
import { fetchData } from 'lib/api';
import Header from 'components/home/Header';
import Main from 'components/home/Main';
import Footer from 'components/home/Footer';

export default function Home({ sch, festOpSch, salmonSch, error }) {
  return (
    <div className={styles.container}>
      <Analytics />
      <Header />
      <Main sch={sch} festOpSch={festOpSch} salmonSch={salmonSch} error={error} />
      <Footer />
    </div>
  )
}

Home.propTypes = {
  sch: PropTypes.object,
  festOpSch: PropTypes.object,
  salmonSch: PropTypes.object,
  error: PropTypes.string
};

export const getStaticProps = async () => {
  try {
    const sch = await fetchData('https://spla3.yuu26.com/api/schedule');
    const festOpSch = await fetchData('https://spla3.yuu26.com/api/fest/schedule');
    const salmonSch = await fetchData('https://spla3.yuu26.com/api/coop-grouping/schedule');

    return {
      props: {
        sch,
        festOpSch,
        salmonSch,
        error: null
      },
    };

  } catch (error) {
    console.error('Failed to fetch or validate data:', error);
    return {
      props: {
        sch: null,
        festOpSch: null,
        salmonSch: null,
        error: "データを取得できませんでした。しばらく経ってから再度お試しください。"
      },
    };
  }
};