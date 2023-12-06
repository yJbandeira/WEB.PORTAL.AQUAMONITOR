import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Box, ButtonBase } from "@mui/material";

interface SideNavItemProps {
  active?: boolean;
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
  path?: string;
  title: string;
  innerKey: string;
}

const SideNavItem: FC<SideNavItemProps> = (props) => {
  const { active = false, disabled, external, icon, path, title, innerKey } = props;

  return (
    <li key={innerKey}>
      <ButtonBase
        sx={{
          alignItems: "center",
          borderRadius: 1,
          display: "flex",
          justifyContent: "flex-start",
          pl: "16px",
          pr: "16px",
          py: "6px",
          textAlign: "left",
          width: "100%",
          ...(active && {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          }),
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          },
        }}
      >
        {icon && (
          <Box
            component="span"
            sx={{
              alignItems: "center",
              color: "#9DA4AE",
              display: "inline-flex",
              justifyContent: "center",
              mr: 2,
              ...(active && {
                color: "primary.main",
              }),
            }}
          >
            {icon}
          </Box>
        )}
        <Box
          component="span"
          sx={{
            color: "#9DA4AE",
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "24px",
            whiteSpace: "nowrap",
            ...(active && {
              color: "common.white",
            }),
            ...(disabled && {
              color: "#6C737F",
            }),
          }}
        >
          {title}
        </Box>
      </ButtonBase>
    </li>
  );
};

SideNavItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  icon: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SideNavItem;
