const Contact = () => {
  return (
    <div className="text-center m-5">
      <h1 className="text-3xl font-bold m-3">Contact Us</h1>
      <form className="">
        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 m-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 m-2"
          placeholder="Message"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600  m-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;