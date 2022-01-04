import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props) {
  //const [open, setOpen] = React.useState(false);

  

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      
      <Snackbar open={props.openAlert} autoHideDuration={4000} onClose={props.handleClose}>
        <Alert onClose={props.handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
