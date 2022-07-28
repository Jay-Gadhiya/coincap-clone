import React from "react";
import "./currencyTable.css";

export function CurrencyTable() {
  return (
    <main className="main-container">
      <section className="back-box-container">
          <ul className="back-box">
              <li>
                  <p>Market cap</p>
                  <p>$74.30B</p>
              </li>
              <li>
                  <p>Market cap</p>
                  <p>$74.30B</p>
              </li>
              <li>
                  <p>Market cap</p>
                  <p>$74.30B</p>
              </li>
              <li>
                  <p>Market cap</p>
                  <p>$74.30B</p>
              </li>
              <li>
                  <p>Market cap</p>
                  <p>$74.30B</p>
              </li>
              <li>
                  <p>Market cap</p>
                  <p>$74.30B</p>
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
            <tr className="bottom-border">
                <td>1</td>
                <td className="name-td-box">
                    <div className="coin-icon-wrapper">
                        <img className="coin-icon" src="https://assets.coincap.io/assets/icons/btc@2x.png" alt="icon" /> 
                        <div className="coin-icon-name-wrapper">
                            <p className="coin-name">Bitcon</p>
                            <p className="light-text coin-subname">ETC</p>
                        </div>
                    </div> 
                </td>
                <td>Germany</td>
                <td>Centro </td>
                <td>Francisco </td>
                <td>Mexico</td>
                <td>Mexico</td>
                <td>Mexico</td>
            </tr>
         </tbody>
           
      </table>
      </section>
    </main>
  );
}
