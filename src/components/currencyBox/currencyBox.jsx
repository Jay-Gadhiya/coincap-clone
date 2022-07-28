import React from "react";
import { getChangePercent } from "../../utils/getChangePercent";
import { simplifiedCurrency } from "../../utils/simplifiedCurrency";

export const CurrencyBox = ({
  rank,
  symbol,
  name,
  supply,
  maxSupply,
  marketCapUsd,
  volumeUsd24Hr,
  priceUsd,
  changePercent24Hr,
  vwap24Hr,
  explorer,
}) => {


    const priceUsdValue = getChangePercent(priceUsd);
    const marketCapValue = simplifiedCurrency(marketCapUsd);
    const VWAPValue = getChangePercent(vwap24Hr);
    const supplyValue = simplifiedCurrency(supply);
    const volumeValue = simplifiedCurrency(volumeUsd24Hr);
    const changePercentNumber = getChangePercent(changePercent24Hr);
    

  return (
    <tr className="bottom-border">
      <td>{rank}</td>
      <td className="name-td-box">
        <div className="coin-icon-wrapper">
          <img
            className="coin-icon"
            src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
            alt="icon"
          />
          <div className="coin-icon-name-wrapper">
            <p className="coin-name">{name}</p>
            <p className="light-text coin-subname">{symbol}</p>
          </div>
        </div>
      </td>
      <td>${priceUsdValue}</td>
      <td className="b-hide">${marketCapValue}</td>
      <td className="a-hide">${VWAPValue} </td>
      <td className="a-hide">${supplyValue}</td>
      <td className="b-hide">${volumeValue}</td>
      <td className="d-hide">{changePercentNumber} %</td>
    </tr>
  );
};
