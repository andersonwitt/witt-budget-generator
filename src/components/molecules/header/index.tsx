import { Money } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface IHeaderProps {
  title: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  color?: string;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const {
    backgroundColor = "#c62828",
    color = "#fff",
    icon = <Money fontSize="large" />,
    title = "",
  } = props;
  return (
    <Box
      role="group"
      aria-label="header"
      width="100%"
      display="flex"
      alignItems="center"
    >
      <Avatar
        role="group"
        aria-label="avatar-header"
        style={{
          color: color,
          backgroundColor: backgroundColor,
          width: 50,
          height: 50,
        }}
      >
        {icon}
      </Avatar>
      <Typography variant="h6" ml={2}>
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
