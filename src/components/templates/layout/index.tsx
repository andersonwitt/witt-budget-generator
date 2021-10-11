import { Facebook } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useHistory } from "react-router";
import AppBar from "../../molecules/app-bar";

const Layout: React.FC = (props) => {
  const { children } = props;
  const history = useHistory();

  const onClickLogo = () => {
    history.push("/");
  };

  return (
    <div>
      <AppBar
        title="Orçamento"
        icon={<Facebook fontSize="large" />}
        onClickLogo={onClickLogo}
      />
      <Box
        sx={{
          flex: 1,
          padding: 3,
        }}
      >
        {children}
      </Box>
    </div>
  );
};

export default Layout;
