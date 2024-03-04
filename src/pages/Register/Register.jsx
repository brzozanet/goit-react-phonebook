import { Helmet, HelmetProvider } from "react-helmet-async";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </HelmetProvider>
  );
};

export default Register;
