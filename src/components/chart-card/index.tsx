import { FC, ReactNode } from "react";
import "./index.scss";

interface IChartCard {
  headerComponent: ReactNode;
  title: string;
  children: ReactNode;
}

export const ChartCard: FC<IChartCard> = ({
  headerComponent,
  title,
  children,
}) => {
  return (
    <div id="chard-card">
      <div className="chart-card-header">
        <h3 className="chart-card-title"> {title}</h3>
        {headerComponent}
      </div>
      {children}
    </div>
  );
};
