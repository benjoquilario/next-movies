import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAuth from './useAuth';

interface Inputs {
  email: string;
  password: string;
}

const useLogin = () => {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return { setLogin, handleSubmit, onSubmit, register, errors };
};

export default useLogin;
