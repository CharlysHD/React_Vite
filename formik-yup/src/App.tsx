import { useFormik } from "formik"
import { Container } from "react-bootstrap";
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es requerido'),
  email: Yup.string().required('El email es requerido').email('Email no valido'),
  password: Yup.string().required('La contraseña es requerida').min(8,"La contraseña debe tener 8 caracteres como minimo")
})

const App= () => {
  
    const formik = useFormik({
      // lo que necesita el formulario formik
      initialValues: {
        name: '',
        email: '',
        password: '',
      },

      // la validacion que hacemos en yup
      validationSchema: validationSchema,

      // lo que pasa cuando se envia el formulario, en este caso, una alerta
      onSubmit: (values) => {
        alert(JSON.stringify(values,null,2));
        //console.log("valores del formulario", values);
      },
    });
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="border rounded-3 p-5 mt-5">
        <h1> Formulario de registro</h1>
        <h5 className="text-center"> con Formik y Yup</h5>

        <form onSubmit={formik.handleSubmit}>

          {/* Nombre */}
          <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label"> Nombre </label>
            <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            />
            
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger"> {formik.errors.name}0</div>
            ) : null}

          </div>

          {/* Email */}
          <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label"> Email </label>
            <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            />
            
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger"> {formik.errors.email}0</div>
            ) : null}

          </div>

              {/* Contraseña */}
          <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label"> Contraseña </label>
            <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            />
            
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger"> {formik.errors.password}0</div>
            ) : null}

          </div>

          <div className="text-end">
            <button type="submit" className="btn btn-warning px-5">Enviar</button>
          </div>
        </form>

      </div>

    </Container>
  )
}

export default App
