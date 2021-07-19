import { useFormik } from "formik";
import { validatinSchema } from "./validation";
import { TextField, Button,Container } from "@material-ui/core";

function App() {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validatinSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxWidth="md">
      
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
          fullWidth
          required
          margin="dense"
          type="text"
          name="fullname"
          id="fullname"
          label="Fullname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullname}
          helperText={formik.touched.fullname && formik.errors.fullname}
          error={formik.errors.fullname && formik.touched.fullname}
        />
        <TextField
        fullWidth
        required
        margin="dense"
        type="text"
        id="usernam"
        label="Username"
        name="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        values={formik.values.username}
        helperText={formik.touched.username && formik.errors.username}
        error={formik.errors.username && formik.touched.username}
         />
        <TextField
        fullWidth
        required
        margin="dense"
        type="text"
        id="email"
        label="Email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        values={formik.values.email}
        helperText={formik.touched.email && formik.errors.email}
        error={formik.errors.email && formik.touched.email}
         />
        <TextField
        fullWidth
        required
        margin="dense"
        type="password"
        id="password"
        label="Password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        values={formik.values.password}
        helperText={formik.touched.password && formik.errors.password}
        error={formik.errors.password && formik.touched.password}
         />
        <Button variant="contained" color="primary" type="sumbit">Submit</Button>
      </form>
    </Container>
  );
}

export default App;
