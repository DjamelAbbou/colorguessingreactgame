import { useState } from "react";
import Container from "@/ui/container";
// import dbPromise, { jsonify } from "@/modules/db";

export default function HomePage({ users }) {
  return <Container className="mt-16 text-white text-2xl">hi</Container>;
}

// export async function getServerSideProps({ ctx }) {
//   const users = await (await dbPromise)
//     .db()
//     .collection("users")
//     .find({})
//     .toArray();

//   return {
//     props: {
//       users: jsonify(users),
//     },
//   };
// }
// export function withValidations(Component) {
//   return function wrappedComponent({}) {
//     const [errors, setErrors] = useState([]);
//     return (
//       <>
//         <Component />
//         {errors.length > 0 && <div>{errors.join(", ")}</div>}
//       </>
//     );
//   };
// }
