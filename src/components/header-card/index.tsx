import { FC, ReactNode, useEffect, useState } from "react";
import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon";
import ArrowDownIcon from "@heroicons/react/24/solid/ArrowDownIcon";
import { Avatar, SvgIcon } from "@mui/material";
import "./index.scss";

interface IChartCard {
  gainLoss?: IGainLoss;
  icon?: ReactNode;
  title: string;
  contentText: string;
  iconColor: string;
}

interface IGainLoss {
  gain: boolean;
  percentage: number;
  text: string;
}

export const HeaderCard: FC<IChartCard> = ({
  title,
  icon,
  gainLoss,
  contentText,
  iconColor,
}) => {
  const [gainLossColor, setGainLossColor] = useState<string>(
    gainLoss?.gain ? "#2e7d32" : "#d32f2f"
  );

  useEffect(() => {
    setGainLossColor(gainLoss?.gain ? "#2e7d32" : "#d32f2f");
  }, [gainLoss?.gain]);

  return (
    <div id="header-card-background">
      <div className="header-card">
        <div className="header-card-content">
          <span className="header-card-title"> {title}</span>
          <h4 className="header-card-content-text"> {contentText}</h4>
        </div>
        {icon && (
          <Avatar
            sx={{
              backgroundColor: iconColor,
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>{icon}</SvgIcon>
          </Avatar>
        )}
      </div>
      {gainLoss && (
        <div className="header-card-bottom">
          <div className="header-card-bottom-gainloss">
            <SvgIcon
              color={gainLoss.gain ? "success" : "error"}
              fontSize="small"
            >
              {gainLoss.gain ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </SvgIcon>
            <p
              className="bottom-gainloss-percentage"
              style={{ color: gainLossColor }}
            >
              {gainLoss.percentage}%
            </p>
          </div>
          <span className="bottom-gainloss-text">{gainLoss.text}</span>
        </div>
      )}
    </div>
  );
};
