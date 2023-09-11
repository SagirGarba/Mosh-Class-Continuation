// import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Please enter at least 3 characters" }),
  age: z
    .number({ invalid_type_error: "please enter" })
    .min(18, { message: "please enter at least 18 characters" }),
});

type FormData = z.infer<typeof schema>;

// interface FormData {
//   age: number;
// }

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };

  //   const [person, setPerson] = useState({ name: "", age: "" });

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();

  //     // if (nameRef.current !== null) person.name = nameRef.current.value;
  //     // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //     console.log(person);
  //   };

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          //   {...register("name", { required: true, minLength: 3 })}

          {...register("name")}
          //   onChange={(event) =>
          //     setPerson({ ...person, name: event.target.value })
          //   }
          //   value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>

      {errors.name && <p className="text-danger">{errors.name.message}</p>}
      {/* {errors.name?.type === "required" && (
        <p className="text-danger">This field is required</p>
      )}
      {errors.name?.type === "minLength" && (
        <p className="text-danger">
          This field required at least three 3 characters
        </p>
      )} */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          //   onChange={(event) =>
          //     setPerson({ ...person, age: parseInt(event.target.value) })
          //   }
          //   value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      {errors.age && <p className="text-danger">{errors.age.message}</p>}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
