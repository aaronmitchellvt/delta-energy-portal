// import { NextResponse } from 'next/server';
// import { db } from '../../../../lib/prisma';

// export async function POST(request: Request) {
//   const { email, password } = await request.json();

//   // validate that there is an email and password

//   // validate that there is not already a user with this email
  
//   const user = await db.user.create({
//     data: {
//       email,
//       password
//     }
//   })
//   console.log("::: inserted user: ", user);

//   return NextResponse.json({ response: "hello world", isOk: true})
// }
