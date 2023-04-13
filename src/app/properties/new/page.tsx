"use client";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";

const New = () => {
  const router = useRouter();
  //Property form
  const [projAddress, setProjAddress] = useState("");
  const [projName, setProjName] = useState("");
  const [projState, setProjState] = useState("");
  const [projCity, setProjCity] = useState("");
  const [projSqFt, setProjSqFt] = useState(0);
  const [projHeight, setProjHeight] = useState(0);
  const [projNumOccupants, setProjNumOccupants] = useState(0);
  const [projNumWindows, setProjNumWindows] = useState(0);
  const [projNumExteriorDoors, setProjNumExteriorDoors] = useState(0);

  const [completeForm, setCompleteForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/properties", {
        projName,
        projAddress,
        projState,
        projCity,
        projSqFt,
        projHeight,
        projNumOccupants,
        projNumWindows,
        projNumExteriorDoors,
      });
      if (data.isOk) {
        router.push("/properties");
      }
    } catch (e) {
      console.log("error: ", e);
    }
  };
  const fillProjDetails = () => {
    setProjHeight(Math.floor(Math.random() * (12 - 8 + 1)) + 8);
    setProjSqFt(Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000);
    setProjNumOccupants(Math.floor(Math.random() * 6) + 1);
    setProjNumExteriorDoors(Math.floor(Math.random() * 5) + 1);
    setProjNumWindows(Math.floor(Math.random() * (14 - 4 + 1)) + 4);
  };

  const fillProjGeneral = () => {
    setProjAddress(randomStreetAddress());
    setProjState(randomState());
    setProjName(randomName());
    setProjCity(randomCity());
  };

  return (
    <div className="p-3 m-3 w-full">
      {loading ? (
        <div className="p-3 m-2">Loading...</div>
      ) : (
        <form onSubmit={handleSubmit} className="p-4 w-1/3">
            {!completeForm && (
              <div className="flex flex-col shadow-lg p-4">
                <h1>Create a project</h1>
                <TextField
                  margin="normal"
                  name="name"
                  label="Project Name"
                  value={projName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setProjName(e.target.value);
                  }}
                />
                <TextField
                  margin="normal"
                  name="address"
                  label="Address"
                  value={projAddress}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setProjAddress(e.target.value);
                  }}
                />
                <TextField
                  margin="normal"
                  name="address"
                  label="City"
                  value={projCity}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setProjCity(e.target.value);
                  }}
                />
                <TextField
                  margin="normal"
                  name="state"
                  label="State"
                  value={projState}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setProjState(e.target.value);
                  }}
                />

                <div className="flex flex-row">
                  <div className="m-2">
                    <Button
                      onClick={fillProjGeneral}
                      variant="outlined"
                      color="secondary"
                    >
                      Fill
                    </Button>
                  </div>
                  <div className="m-2">
                    <Button
                      onClick={() => setCompleteForm(true)}
                      variant="contained"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {completeForm && (
              <div className="flex flex-col shadow-lg p-4">
                <h1>{projName} Details</h1>
                <TextField
                  margin="normal"
                  name="occupants"
                  label="Number of Occupants"
                  type="number"
                  value={projNumOccupants}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setProjNumOccupants(Number(e.target.value));
                  }}
                />
                <TextField
                  margin="normal"
                  name="squareFeet"
                  label="Square Feet"
                  type="number"
                  value={projSqFt}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setProjSqFt(Number(e.target.value));
                  }}
                />
                <TextField
                  margin="normal"
                  name="numberOfWindows"
                  label="Number of Windows"
                  type="number"
                  value={projNumWindows}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setProjNumWindows(Number(e.target.value));
                  }}
                />
                <TextField
                  margin="normal"
                  name="numberOfDoors"
                  label="Number of Doors"
                  type="number"
                  value={projNumExteriorDoors}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setProjNumExteriorDoors(Number(e.target.value));
                  }}
                />

                <TextField
                  margin="normal"
                  name="height"
                  label="Height"
                  type="number"
                  value={projHeight}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setProjHeight(Number(e.target.value));
                  }}
                />

                <div className="flex flex-row">
                  <div className="m-2">
                    <Button
                      color="secondary"
                      variant="outlined"
                      onClick={fillProjDetails}
                    >
                      Auto-Fill
                    </Button>
                  </div>
                  <div className="m-2">
                    <Button variant="contained" type="submit">
                      Submit Property
                    </Button>
                  </div>
                </div>
              </div>
            )}
        </form>
      )}
    </div>
  );
};

export default New;

function randomState() {
  const states = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];
  const randomIndex = Math.floor(Math.random() * states.length);
  return states[randomIndex];
}

function randomCity() {
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "Fort Worth",
    "Columbus",
    "San Francisco",
    "Charlotte",
    "Indianapolis",
    "Seattle",
    "Denver",
    "Washington",
    "Boston",
    "Nashville",
    "El Paso",
    "Detroit",
    "Memphis",
    "Portland",
    "Oklahoma City",
    "Las Vegas",
    "Louisville",
    "Baltimore",
    "Milwaukee",
    "Albuquerque",
    "Tucson",
    "Fresno",
    "Sacramento",
    "Mesa",
    "Atlanta",
    "Kansas City",
    "Colorado Springs",
    "Miami",
    "Raleigh",
    "Omaha",
    "Long Beach",
    "Virginia Beach",
    "Oakland",
    "Minneapolis",
    "Tulsa",
    "Wichita",
    "New Orleans",
    "Arlington",
  ];
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}

function randomName() {
  const firstNames = [
    "Emily",
    "Jacob",
    "Sophia",
    "Michael",
    "Emma",
    "Joshua",
    "Madison",
    "Matthew",
    "Olivia",
    "Christopher",
    "Hannah",
    "Andrew",
    "Isabella",
    "Ethan",
    "Abigail",
    "Daniel",
    "Mia",
    "William",
    "Elizabeth",
    "Joseph",
    "Samantha",
    "David",
    "Natalie",
    "Alexander",
    "Alyssa",
    "Nicholas",
    "Grace",
    "Tyler",
    "Ava",
    "Ryan",
    "Chloe",
    "James",
    "Lauren",
    "John",
    "Victoria",
    "Luke",
    "Avery",
    "Mary",
    "Gabriel",
    "Ella",
    "Anthony",
    "Aubrey",
    "Benjamin",
    "Addison",
    "Isaac",
    "Lily",
    "Owen",
    "Evelyn",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
    "Martin",
    "Thompson",
    "Garcia",
    "Martinez",
    "Robinson",
    "Clark",
    "Rodriguez",
    "Lewis",
    "Lee",
    "Walker",
    "Hall",
    "Allen",
    "Young",
    "King",
    "Wright",
    "Scott",
    "Green",
    "Baker",
    "Adams",
    "Nelson",
    "Carter",
    "Mitchell",
    "Perez",
    "Roberts",
    "Turner",
    "Phillips",
    "Campbell",
    "Parker",
    "Evans",
    "Edwards",
    "Collins",
    "Stewart",
    "Sanchez",
    "Morris",
    "Rogers",
  ];
  const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
  const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);
  const firstName = firstNames[randomFirstNameIndex];
  const lastName = lastNames[randomLastNameIndex];
  return `${firstName} ${lastName}`;
}

function randomStreetAddress() {
  const streetNames = [
    "Main Street",
    "Broadway",
    "Maple Avenue",
    "Chestnut Street",
    "Oak Street",
    "Elm Street",
    "Pine Street",
    "Church Street",
    "Washington Street",
    "Market Street",
    "High Street",
    "Park Avenue",
    "Lincoln Avenue",
    "Fourth Street",
    "Fifth Avenue",
    "First Street",
    "Second Street",
    "Third Street",
    "Spruce Street",
    "Hill Street",
    "Water Street",
    "Front Street",
    "Railroad Street",
    "Canal Street",
    "College Avenue",
    "Smith Street",
    "North Street",
    "South Street",
    "West Street",
    "East Street",
    "Court Street",
    "Cedar Street",
    "Center Street",
    "Cherry Street",
    "Clinton Street",
    "Division Street",
    "Forest Street",
    "Franklin Street",
    "Garden Street",
    "Grove Street",
    "Harbor Street",
    "Harrison Street",
    "Hickory Street",
    "Lake Street",
    "Laurel Street",
    "Madison Street",
    "Meadow Street",
    "Pearl Street",
    "Poplar Street",
    "River Street",
    "Rose Street",
    "Spring Street",
    "State Street",
    "Summer Street",
    "Sunset Street",
    "Valley Street",
    "Vine Street",
    "Willow Street",
    "Wood Street",
    "York Street",
  ];
  const randomStreetIndex = Math.floor(Math.random() * streetNames.length);
  const streetName = streetNames[randomStreetIndex];
  const streetNumber = Math.floor(Math.random() * 10000) + 1;
  return `${streetNumber} ${streetName}`;
}

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
