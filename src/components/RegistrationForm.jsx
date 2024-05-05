import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegistrationForm = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push('/data-upload');
    //   window.location.href = '/data-upload';
  };

  return (
    <section className="">
      <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-[#e2e8f0] border-0">

          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-center mb-5 mt-5">
              <h6 className="text-[#475569] text-sm font-bold">
                Create an account
              </h6>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-[#475569] text-xs font-bold mb-2" htmlFor="grid-password">User Name</label>
                <input type="text" className="border-0 px-3 py-3 placeholder-[#94a3b8] text-[#475569] bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="User Name" />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-[#475569] text-xs font-bold mb-2" htmlFor="grid-password">Email</label>
                <input type="email" className="border-0 px-3 py-3 placeholder-[#94a3b8] text-[#475569] bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-[#475569] text-xs font-bold mb-2" htmlFor="grid-password">Password</label>
                <input type="password" className="border-0 px-3 py-3 placeholder-[#94a3b8] text-[#475569] bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password" />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-[#475569] text-xs font-bold mb-2" htmlFor="grid-password">Confirm Password</label>
                <input type="password" className="border-0 px-3 py-3 placeholder-[#94a3b8] text-[#475569] bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Confirm Password" />
              </div>
              <div className="text-center mt-6">
                <button className="bg-[#1e293b] text-white active:bg-[#475569] text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit"> Sign up </button>
              </div>
            </form>
            <div className="rounded-t mb-0 py-6">
              <hr className="mb-4 border-b-1 border-[#9aa7b9]" />
              <div className="text-center mb-3">
                <h6 className="text-[#64748b] text-sm font-bold">
                  or Sign up with
                </h6>
              </div>
              <div className="btn-wrapper text-center">
                <button className="bg-white w-full text-[#475569] px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md flex justify-center items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                  <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg" />Google </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pt-8 pb-6 mt-2">
        <div className="container mx-auto px-2">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-[#64748b] font-semibold py-1">
                Do you Have an Account? <Link href="/auth/login" className="text-[#64748b] hover:text-gray-800">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
