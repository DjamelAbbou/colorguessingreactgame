import { useState } from "react";
import Container from "@/ui/container";
// import dbPromise, { jsonify } from "@/modules/db";

export default function HomePage({ users }) {
  const alphanumeric = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
  ];
  const [colors, setColors] = useState(["#", "#", "#"]);

  const [result, setResult] = useState("false");
  const [options, setOptions] = useState({
    First: "#AB43CE",
    Second: "#DBGHT3",
    Third: "#93E8G3",
  });
  return (
    <Container className="mt-16 text-white text-2xl flex flex-col justify-center items-center">
      <div
        onClick={() =>
          setColors(() => {
            const colors = ["#", "#", "#"];
            for (let j = 0; j < 3; ++j) {
              for (let i = 0; i < 6; ++i) {
                const index = Math.floor(Math.random() * alphanumeric.length);
                colors[j] += alphanumeric[index];
              }
            }

            setOptions({
              First: colors[0],
              Second: colors[1],
              Third: colors[2],
            });
            return "";
          })
        }
      >
        START GAME
      </div>
      <div
        className="w-[250px] h-[200px] mb-2"
        style={{
          backgroundColor: (() => {
            const index = Math.floor(Math.random() * 2);
            console.log(index);
            if (index == 0) return String(options["First"]);
            if (index == 1) return String(options["Second"]);
            if (index == 2) return String(options["Third"]);
          })(),
        }}
      />

      <div className="text-sm flex items-center gap-5 ml-2">
        <div
          onClick={() =>
            options["First"] == options.First
              ? setResult("correct")
              : setResult("Incorrect")
          }
          className="flex items-center justify-center w-16 h-8 bg-gray-500 cursor-pointer"
        >
          {options.First}
        </div>
        <div
          onClick={() =>
            options["First"] == options.Second
              ? setResult("correct")
              : setResult("Incorrect")
          }
          className="flex items-center justify-center w-16 h-8 bg-gray-500 cursor-pointer"
        >
          {options.Second}
        </div>
        <div
          onClick={() =>
            options["First"] == options.Third
              ? setResult("correct")
              : setResult("Incorrect")
          }
          className="flex items-center justify-center w-16 h-8 bg-gray-500 cursor-pointer"
        >
          {options.Third}
        </div>
      </div>
      <div className="pt-8 text-sky-600">{result.toLocaleUpperCase()}</div>
    </Container>
  );
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
