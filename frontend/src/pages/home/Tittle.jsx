import logo from "../../../public/ChirppChat_logo.png";
const Tittle = () => {
  return (
    <div className="flex flex-row w-auto justify-center items-center">
        <div className="w-24 rounded-full">
            <img src={logo} alt="ChirppChat_logo" />
        </div>
        <p className="text-[#1f6ece] text-4xl font-bold">Chirpp Chat</p>
    </div>
  )
}

export default Tittle
