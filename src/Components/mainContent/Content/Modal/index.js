import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";

import ModalContent from "./ModalContent";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    flexWrap: "wrap",
    overflow: "hidden",
    width: "85vw",
    height: "95vh",
    display: "flex",
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const { open } = props;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        // onClose={handleOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <ModalContent {...props} />
            {/* <Button onClick={() => handleOpen(false)} color="primary">
              Close it!
            </Button> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
