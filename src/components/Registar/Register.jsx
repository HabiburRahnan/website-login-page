import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("handle submit");
  //   const name = e.target.name.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   console.log(email, password, name);
  // };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center pt-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          REGISTER
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>

        <form
          onSubmit={handleFormSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Input
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Input
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal">
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900">
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth type="submit">
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?
            <button>
              <NavLink to="/login" className="font-medium text-gray-900">
                Login
              </NavLink>
            </button>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
