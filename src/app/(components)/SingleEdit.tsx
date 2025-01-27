import {
  Popper,
  Fade,
  Paper,
  ClickAwayListener,
  Box,
  Typography,
  Grid2 as Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  Button,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";
import { IRoomInventory } from "../(hooks)/useRoomRateAvailabilityCalendar";

interface IProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  property_id: number;
  inventory: IRoomInventory;
  room_category: {
    id: number;
    name: string;
  };
}

export type SingleEditForm = {
  status: boolean | string;
};

function SingleEditRoomRateInventory(props: IProps) {
  const {
    control,
    formState: { errors },
  } = useForm<SingleEditForm>();

  return (
    <>
      <Popper
        sx={{ zIndex: 1200 }}
        open={props.open}
        anchorEl={props.anchorEl}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper elevation={4} sx={{ backgroundColor: "background.default" }}>
              <ClickAwayListener
                onClickAway={() => props.setOpen((prev) => !prev)}
              >
                <Box
                  sx={{ p: 2 }}
                  component="form"
                  id="post-property-room-status"
                >
                  <Typography variant="h6">
                    {props.room_category.name}
                  </Typography>
                  <Typography variant="subtitle1">
                    {dayjs(props.inventory.date).format("DD MMM YYYY")}
                  </Typography>

                  <Grid container columnSpacing={2}>
                    <Grid size={12}>
                      <FormControl error={Boolean(errors.status)}>
                        <Controller
                          name="status"
                          control={control}
                          rules={{
                            required: "Status is required",
                          }}
                          defaultValue={props.inventory.status}
                          render={({ field }) => (
                            <RadioGroup
                              row
                              aria-label="inventory-status"
                              {...field}
                            >
                              <FormControlLabel
                                label="Close"
                                value="false"
                                control={<Radio />}
                              />
                              <FormControlLabel
                                label="Open"
                                value="true"
                                control={<Radio />}
                              />
                            </RadioGroup>
                          )}
                        />
                        <FormHelperText>
                          {errors.status && errors.status.message}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid size={12}>
                      <Button type="submit" color="success" variant="contained">
                        Save
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => props.setOpen(false)}
                      >
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
}

export default SingleEditRoomRateInventory;
