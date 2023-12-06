import { FC, ReactNode } from "react";
import "./index.scss";

interface IChartCard {
  headerComponent?: ReactNode;
  title: string;
  width?: string;
  children: ReactNode;
}

export const ChartCard: FC<IChartCard> = ({
  headerComponent,
  title,
  width,
  children,
}) => {
  return (
    <div className="chard-card" style={{ width: width }}>
      <div className="chart-card-header">
        <h3 className="chart-card-title"> {title}</h3>
        {headerComponent}
      </div>
      {children}
    </div>
  );
};
