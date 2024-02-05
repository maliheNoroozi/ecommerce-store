import { FC } from "react";

interface CurrencyProps {
  value?: string | number;
}

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

export const Currency: FC<CurrencyProps> = ({ value = 0 }) => {
  const currency = formatter.format(Number(value));
  return <span className="font-semibold">{currency}</span>;
};
