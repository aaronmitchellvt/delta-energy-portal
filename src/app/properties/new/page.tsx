"use client";
import React, { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  Box,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useRouter } from "next/navigation";

const New = () => {
  const router = useRouter();
  //Property form
  const [address, setAddress] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [propSqFt, setPropSqFt] = useState(0);
  const [propHeight, setPropHeight] = useState(0);
  const [propOccupants, setPropOccupants] = useState(0);
  const [propNumWindows, setPropNumWindows] = useState(0);
  const [propNumExteriorDoors, setPropNumExteriorDoors] = useState(0);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/properties", {
        propAddress: address,
        propClientName: clientName,
        propClientPhone: clientPhone,
        propSqFt,
        propHeight,
        propNumOccupants: propOccupants,
        propNumWindows,
        propNumExteriorDoors,
      });
      if (data.isOk) {
        router.push("/properties");
      }
    } catch (e) {
      console.log("error: ", e);
    }
  };
  const handleAutoFill = () => {
    setAddress("17935 Calm Brook Ct, Houston, TX, 77095");
    setClientName("John Doe");
    setClientPhone("555-555-5555");
    setPropHeight(8);
    setPropSqFt(1815);
    setPropOccupants(4);
    setPropNumExteriorDoors(3);
    setPropNumWindows(15);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignContent="center">
            <CircularProgress />
          </Box>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 w-1/4">
            <Box display="flex" flexDirection="column">
              <TextField
                margin="normal"
                name="name"
                label="Name"
                value={clientName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setClientName(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                name="phoneNumber"
                label="Phone Number"
                value={clientPhone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setClientPhone(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                name="address"
                label="Address"
                value={address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setAddress(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                name="numberOfOccupants"
                label="Occupants"
                type="number"
                value={propOccupants}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPropOccupants(Number(e.target.value));
                }}
              />
              <TextField
                margin="normal"
                name="numberOfWindows"
                label="Number of Windows"
                type="number"
                value={propNumWindows}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPropNumWindows(Number(e.target.value));
                }}
              />
              <TextField
                margin="normal"
                name="numberOfDoors"
                label="Number of Doors"
                type="number"
                value={propNumExteriorDoors}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPropNumExteriorDoors(Number(e.target.value));
                }}
              />
              <TextField
                margin="normal"
                name="squareFeet"
                label="Square Feet"
                type="number"
                value={propSqFt}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPropSqFt(Number(e.target.value));
                }}
              />
              <TextField
                margin="normal"
                name="height"
                label="Height"
                type="number"
                value={propHeight}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPropHeight(Number(e.target.value));
                }}
              />

              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Button
                    color="success"
                    variant="contained"
                    onClick={handleAutoFill}
                  >
                    Auto-Fill
                  </Button>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        )}
      </Grid>
    </Grid>
  );
};

export default New;

// interface IRoom {
//   rmName: string;
//   rmNumDoors: string;
//   rmNumWindows: string;
//   rmSqFt: string;
//   rmHeight: string;
// }

// const addRoom = () => {
//   // hide the add
//   console.log("add room clicked");
//   setShowRoomForm(true);
// };

// Room form
// const [rooms, setRooms] = useState<Array<any>>([]);
// const [roomObj, setRoomObj] = useState<IRoom>({
//   rmName: "",
//   rmNumDoors: "",
//   rmNumWindows: "",
//   rmSqFt: "",
//   rmHeight: "",
// });

// const [showRoomForm, setShowRoomForm] = useState(false);

// const RoomItem: React.FC = (
//   name: string,
//   numExteriorDoors: number,
//   numWindows: number,
//   sqFt: number,
//   height: number
// ) => {
//   return (
//     <Card>
//       <CardContent>
//         <h1>{name}</h1>
//         <h3>Exterior doors: {numExteriorDoors}</h3>
//         <h3>Windows: {numWindows}</h3>
//         <h3>Cubic feet: {sqFt * height}</h3>
//       </CardContent>
//     </Card>
//   );
// };

{
  /* {showRoomForm ? (
          <div className="w-4/5">
            <Grid container spacing={2}>
              <Grid item>
                <TextField
                  id="roomName"
                  label="Room Name"
                  variant="outlined"
                  value={roomObj.rmName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setRoomObj({ ...roomObj, rmName: e.target.value });
                  }}
                />
              </Grid>

              <Grid item>
                <TextField
                  id="roomNumDoors"
                  label="# doors"
                  variant="outlined"
                  value={roomObj.rmNumDoors}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setRoomObj({ ...roomObj, rmNumDoors: e.target.value });
                  }}
                />
                <Grid item>
                  <TextField
                    id="roomNumWindows"
                    label="# windows"
                    variant="outlined"
                    value={roomObj.rmNumWindows}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setRoomObj({ ...roomObj, rmNumWindows: e.target.value });
                    }}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="roomSqFt"
                    label="Square Feet"
                    variant="outlined"
                    value={roomObj.rmSqFt}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setRoomObj({ ...roomObj, rmSqFt: e.target.value });
                    }}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="roomHeight"
                    label="Height"
                    variant="outlined"
                    value={roomObj.rmHeight}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setRoomObj({ ...roomObj, rmHeight: e.target.value });
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Button
              onClick={() => {
                console.log("clicked");
                setRooms([...rooms, roomObj]);
                setShowRoomForm(false);
              }}
              variant="contained"
            >
              + Add
            </Button>
            <Button
              onClick={() => {
                setShowRoomForm(false);
              }}
              variant="outlined"
            >
              Cancel
            </Button>
          </div>
        ) : (
          <Button onClick={addRoom} variant="contained">
            + Add Room
          </Button>
        )} */
}

{
  /* display room cards once a room has been added */
}
{
  /* {rooms.length > 0 && (
          <>
            <h2>Rooms</h2>
            <ul>
              {rooms.map((room: IRoom) => (
                <li key={room.rmName}>
                  {room.rmName}
                </li>
              ))}
            </ul>
          </>
        )} */
}
