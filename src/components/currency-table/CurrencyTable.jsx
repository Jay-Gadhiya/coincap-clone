import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies } from "../../Redux/asyncThunk/currencyThunk";
import { CurrencyBox } from "../currencyBox/currencyBox";
import "./currencyTable.css";

export const CurrencyTable =() => {

    const dispatch = useDispatch();
    const {currencies} = useSelector(store => store.currencies);
    const [loadDataNumber, setLoadDataNumber] = useState(1);

    useEffect(() => {
        dispatch(getCurrencies(loadDataNumber));
    }, [loadDataNumber]);


  return (
      <>
        <main className="main-container">
        <section className="back-box-container">
            <ul className="back-box">
                <li>
                    <p>Market cap</p>
                    <p>$1.32T</p>
                </li>
                <li>
                    <p>EXCHANGE VOL</p>
                    <p>$75.21B</p>
                </li>
                <li>
                    <p>ASSETS</p>
                    <p>2,295</p>
                </li>
                <li>
                    <p>EXCHANGES</p>
                    <p>73</p>
                </li>
                <li>
                    <p>MARKETS</p>
                    <p>14,746</p>
                </li>
                <li>
                    <p>BTC DOM INDEX</p>
                    <p>33.4%</p>
                </li>
            </ul>
        </section>

        <section className="table-section">
            <table>
                <thead>
                <tr className="light-text">
                    <th>Rank</th>
                    <th className="name-td-box">Name</th>
                    <th className="price-li">Price</th>
                    <th>Market cap</th>
                    <th>VWAP(24Hr)</th>
                    <th>Supply</th>
                    <th>Volume(24Hr)</th>
                    <th>Change(24Hr)</th>
                </tr>
            </thead>
            <tbody>
                    {
                        currencies?.data?.map(currency => (
                            <CurrencyBox key={currency?.id} {...currency}/>
                        ))
                    }
            </tbody>
            
        </table>
        </section>
        </main>
        <div className='block-ele'>
        <button onClick={() => setLoadDataNumber(pre => pre + 1)} className="wallet-button">View More</button>
        </div>
    </>
  );
}
