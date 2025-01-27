import { styled } from "@mui/material/styles";
import { Box, InputAdornment, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Controller, useForm } from "react-hook-form";
import { ErrorOutline } from "@mui/icons-material";
import {
  IRateCalendar,
  IRoomInventory,
} from "../(hooks)/useRoomRateAvailabilityCalendar";

interface IProps {
  rate_plan: {
    id: number;
    name: string;
  };
  room_rate: IRateCalendar;
  room_category: {
    id: string;
    name: string;
  };
  inventory: IRoomInventory;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderWidth: 0,
    },
    "&:hover fieldset": {
      borderWidth: 2,
      borderColor: theme.palette.success.main,
    },
    "&.Mui-focused fieldset": {
      borderWidth: 2,
      borderColor: theme.palette.success.main,
    },
  },
}));

export default function RoomRateCell(props: IProps) {
  const theme = useTheme();

  const { control } = useForm<{
    rate: number | string;
  }>();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          width: "100%",
          height: "100%",
          fontSize: "12px",
          fontWeight: "bold",
          borderLeft: "1px solid",
          borderBottom: "1px solid",
          borderColor: props.inventory.status
            ? theme.palette.divider
            : theme.palette.error.dark,
          color: props.inventory.status
            ? "inherit"
            : theme.palette.background.default,
          backgroundColor: props.inventory.status
            ? "inherit"
            : theme.palette.error.light,
        }}
      >
        <Controller
          name="rate"
          control={control}
          rules={{
            min: {
              value: 0,
              message: "Rate must be minimum 0",
            },
            pattern: {
              value: /^[0-9]+(\.[0-9]{1,2})?$/,
              message: "Please enter only numbers.",
            },
          }}
          defaultValue={props.room_rate.rate}
          render={({ field, fieldState: { invalid } }) => (
            <StyledTextField
              {...field}
              size="small"
              variant="outlined"
              id="rate"
              type="text"
              fullWidth
              sx={{ marginBottom: 0 }}
              inputProps={{
                sx: {
                  paddingX: "4px",
                  paddingY: "4px",
                  textAlign: "right",
                  fontSize: "12px",
                  fontWeight: "bold",
                },
              }}
              error={invalid}
              InputProps={{
                endAdornment: invalid ? (
                  <InputAdornment position="end" sx={{ margin: 0, padding: 0 }}>
                    <ErrorOutline sx={{ fontSize: 12, color: "error.main" }} />
                  </InputAdornment>
                ) : null,
                sx: { border: "0px", borderRadius: "0px" },
              }}
            />
          )}
        />
      </Box>
    </>
  );
}
