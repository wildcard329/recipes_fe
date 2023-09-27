import { Button } from "@mui/material";

const MuiButton = ({ type="button", variant="outlined", color="primary", btnLabel, btnCb }) => 
  <Button
    type={type}
    variant={variant}
    color={color}
    onClick={btnCb}
  >
    {btnLabel}
  </Button>

export default MuiButton;
