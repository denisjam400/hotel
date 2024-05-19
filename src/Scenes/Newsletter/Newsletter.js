const Newsletter = () => {
  return (
    <div className="bg-DGold h-[18vh] md:h-[35vh] w-screen flex justify-center items-center">
      <form
        action=""
        className="rounded-full h-16 border-2 border-white outline-white w-[90%] md:w-[70%] flex justify-center items-center gap-0"
      >
        <input
          type="text"
          name=""
          value=""
          id=""
          className="w-[70%] md:w-[85%] h-full px-5 py-2 rounded-l-full outline-none border-none bg-white"
          placeholder="Subscribe to our luxurious Newsletter"
        />
        <button
          type="submit"
          className="w-[30%] md:w-[15%] h-full rounded-r-full text-lg"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
