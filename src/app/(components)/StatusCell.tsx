import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IRoomInventory } from "../(hooks)/useRoomRateAvailabilityCalendar";

interface IProps {
  inventory: IRoomInventory;
  room_category: {
    id: string;
    name: string;
  };
}

export default function RoomInventoryStatusCell(props: IProps) {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          pr: 1,
          fontSize: "12px",
          textAlign: "right",
          fontWeight: "bold",
          borderLeft: "1px solid",
          borderBottom: "1px solid",
          borderColor: props.inventory.status
            ? theme.palette.success.light
            : theme.palette.error.dark,
          color: theme.palette.background.default,
          backgroundColor: props.inventory.status
            ? theme.palette.success.main
            : theme.palette.error.main,
          cursor: "pointer",
        }}
      >
        {props.inventory.status ? "Open" : "Close"}
      </Box>
    </>
  );
}
