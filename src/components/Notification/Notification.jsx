import useNotificationStore from "../../stores/notification/notification.store";
import { Snackbar, Alert } from "@mui/material";

const Notification = () => {
  const { isOpen, text, severity, setClose } = useNotificationStore((s) => s);

  const handleClose = () => {
    setClose();
  };

  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={1000}>
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};
export default Notification;
