import searchIcon from "../assets/icons/search.png"
import bagIcon from "../assets/icons/bag.png"
import logoIcon from "../assets/icons/logoicon.png"

function Navbar() {
    return (
       <nav className=" relative z-20 flex items-center justify-between px-10 py-5 text-white">

            <div className="flex items-center gap-3">
                <img className="w-[42px] h-[42px] object-contain" src={logoIcon} alt="FloraVision logo" />
                <h1 className="text-[28px] font-bold">FloraVision.</h1>
            </div>
            

            <ul className="flex items-center gap-16 text-[18px] font-medium ">
                <li><a href="">Home</a></li>
                <li><a href="">Plants Type </a></li>
                <li><a href="">More</a></li>
                <li><a href="">Contact</a></li>
            </ul>

            <div className="flex items-center gap-8">
                <img className="w-[26px] h-[26px] object-contain" src={searchIcon} alt="search icon" />
                <img className="w-[26px] h-[26px] object-contain" src={bagIcon} alt="bag icon" />
            </div>

            <div className="flex flex-col items-end gap-2">
    <span className="w-8 h-[3px] bg-white rounded-full"></span>
    <span className="w-5 h-[3px] bg-white rounded-full"></span>
</div>

        </nav>
    )
}

export default Navbar