import { Snackbar, Button } from '@mui/material';
import { useEffect } from 'react'; // hook imported

interface Props {
  open: boolean;
  onClose: () => void;
  onUndo: () => void;
}

export default function UndoSnackbar({ open, onClose, onUndo }: Props) {
  // Ensure cleanup when snackbar closes
  useEffect(() => {
    if (!open) {
      // When snackbar closes, reset deleted task state
      onClose();
    }
  }, [open, onClose]);
  
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={4000}
      message="Task deleted"
      action={<Button color="secondary" size="small" onClick={onUndo}>Undo</Button>}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  );
}


