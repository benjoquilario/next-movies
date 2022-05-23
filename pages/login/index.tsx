import Link from 'next/link';
import useLogin from '../../hooks/useLogin';

const LoginPage = () => {
  const { setLogin, handleSubmit, onSubmit, register, errors } = useLogin();

  return (
    <div className="min-h-screen">
      <div className="h-full w-full min-h-screen overflow-hidden bg-[#0B1622]">
        <div className="max-w-full md:max-w-[400px] mx-auto mt-0 md:mt-[60px] min-h-screen md:min-h-0 bg-[#151F2E] w-full p-[40px] text-center rounded">
          <h1 className="text-2xl mt-[20px] mb-[60px] font-semibold text-[#9fadbd]">
            Login to Next Movies
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('email', { required: true })}
              placeholder="Email"
              className="bg-[#0B1622] rounded text-[#9FADBD] text-sm font-semibold leading-[40px] h-[40px] mb-[25px] px-[15px] w-full"
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
            <input
              {...register('password', { required: true })}
              placeholder="Password"
              type="password"
              className="bg-[#0B1622] rounded text-[#9FADBD] text-sm font-semibold leading-[40px] h-[40px] mb-[25px] px-[15px] w-full"
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
            <button
              type="submit"
              className="inline-block bg-[#3DB4F2] text-sm font-semibold py-[8px] px-[30px] mt-4 rounded text-white"
              onClick={() => setLogin(true)}
            >
              Login
            </button>
          </form>
          <Link href="/register">
            <a className="block text-base mt-[80px] text-[#8596A5]">
              Not registered?
              <span className="ml-1 text-[#3DB4F2]">Create an account</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
