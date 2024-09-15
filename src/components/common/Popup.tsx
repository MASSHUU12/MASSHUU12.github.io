import { Icon } from "@iconify/react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import {
  ComponentChildren,
  FunctionComponent,
  JSX,
  toChildArray,
} from "preact";
import { forwardRef } from "preact/compat";
import { useEffect, useState } from "preact/hooks";

interface PopupProps {
  children: ComponentChildren;
}

const Transition = forwardRef<
  HTMLElement,
  TransitionProps & { children: JSX.Element }
>((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Popup: FunctionComponent<PopupProps> = ({
  children,
}: PopupProps): JSX.Element => {
  const childrenArray = toChildArray(children);

  useEffect(() => {
    handleOpen();
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      autofocus
      fullWidth
      maxWidth="md">
      <DialogContent
        sx={{
          p: 0,
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}>
        {/* Left section */}
        {childrenArray.length >= 2 && (
          <Box
            component="section"
            sx={{
              p: {
                xs: 2,
                md: 4,
              },
              flex: 1,
            }}>
            {childrenArray[0]}
          </Box>
        )}
        {/* Right section */}
        <Box bgcolor="primary.main" sx={{ flex: 1 }}>
          {/* Close button */}
          <DialogActions>
            <Box sx={{ cursor: "pointer" }}>
              <Icon
                onClick={handleClose}
                icon="carbon:close"
                color="white"
                width="32"
              />
            </Box>
          </DialogActions>
          <Box
            component="section"
            sx={{
              p: {
                xs: 2,
                md: 4,
              },
            }}>
            {childrenArray[childrenArray.length <= 1 ? 0 : 1]}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
