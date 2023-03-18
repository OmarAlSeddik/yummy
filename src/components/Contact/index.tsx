const Contact = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center pl-16">
      <div className="flex flex-col items-center justify-between gap-4">
        <div className="grid grid-cols-1 items-center justify-center gap-4 text-black sm:grid-cols-2">
          <input
            type="text"
            className="w-[15rem] rounded border-[1px] bg-white py-1.5 px-3"
            placeholder="Enter your name"
          />
          <input
            type="email"
            className="w-[15rem] rounded border-[1px] bg-white py-1.5 px-3"
            placeholder="Enter your email"
          />
          <input
            type="text"
            className="w-[15rem] rounded border-[1px] bg-white py-1.5 px-3"
            placeholder="Enter your phone"
          />
          <input
            type="number"
            className="w-[15rem] rounded border-[1px] bg-white py-1.5 px-3"
            placeholder="Enter your age"
          />
          <input
            type="password"
            className="w-[15rem] rounded border-[1px] bg-white py-1.5 px-3"
            placeholder="Enter your password"
          />
          <input
            type="password"
            className="w-[15rem] rounded border-[1px] bg-white py-1.5 px-3"
            placeholder="Repassword"
          />
        </div>
        <button className="rounded border-[1px] border-yummy-red-2 py-1.5 px-2 text-yummy-red-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
