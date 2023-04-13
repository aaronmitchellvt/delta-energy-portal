// "use client";

// import { FormGroup, TextField, Button } from "@mui/material";
// import { useState } from "react";
// import "../../app/globals.css";
// import axios from "axios";
// import { useRouter } from "next/navigation";


// export default function Login() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e: React.SyntheticEvent) => {
//     e.preventDefault();
//   };

//   return (
//     <div>
//       <h1 className="text-red-500">Login Page</h1>
//       <form onSubmit={handleSubmit}>
//         <FormGroup>
//           <TextField
//             type="email"
//             id="Email"
//             label="Email"
//             variant="standard"
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//               setEmail(e.target.value);
//             }}
//           />
//           <TextField
//             type="password"
//             id="Password"
//             label="Password"
//             variant="standard"
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//               setPassword(e.target.value);
//             }}
//           />
//           <Button type="submit" variant="contained">
//             Submit
//           </Button>
//         </FormGroup>
//       </form>
//     </div>
//   );
// }
