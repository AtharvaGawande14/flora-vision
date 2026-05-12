import avt2 from "../assets/avatar/avt2.png"
import avt3 from "../assets/avatar/avt3.png"
import avt4 from "../assets/avatar/avt4.png"

function CustomerReview(){
    return(
        <section className="mt-32 px-10 text-white">
            <h1 className="text-[30px] font-bold text-center text-white">
                Customer Review</h1>

    <div className="relative z-10 mt-35 flex flex-wrap justify-center gap-10">
        <div className="relative w-full max-w-[420px] h-[400px] bg-[#1F2A1C]/80 rounded-[40px] p-8 flex flex-col pt-15 backdrop-blur-md border border-white/10">

            <div className="flex items-center gap-4">

                        <img
                            src={avt2}
                            className="w-[70px] h-[70px] rounded-full object-cover"
                        />
                        <div>

                            <h3 className="text-[32px] text-white">
                                Shelly Russel
                            </h3>

                            <span className="text-yellow-400 text-[20px]">
                                ★★★★★
                            </span>

                        </div>

                    </div>

                    <p className="text-[20px] text-white/70 leading-[1.6] mt-8">
                        Just got my hands on some absolutely awesome plants, and I couldn't be happier!
                    </p>

                    </div>

                    <div className="relative w-[420px] h-[400px] bg-[#1F2A1C]/80 rounded-[40px] p-8 flex flex-col pt-15 backdrop-blur-md border border-white/10">

                        <div className="flex items-center gap-4">

                        <img
                            src={avt3}
                            className="w-[70px] h-[70px] rounded-full object-cover"
                        />
                        <div>

                            <h3 className="text-[32px] text-white">
                                Lula Rolfson
                            </h3>

                            <span className="text-yellow-400 text-[20px]">
                                ★★★★★
                            </span>

                        </div>

                    </div>

                    <p className="text-[20px] text-white/70 leading-[1.6] mt-8">
                        Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.
                    </p>

                    </div>

                    

            <div className="relative w-full max-w-[420px] h-[400px] bg-[#1F2A1C]/80 rounded-[40px] p-8 flex flex-col pt-15 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-4">

                        <img
                            src={avt4}
                            className="w-[70px] h-[70px] rounded-full object-cover"
                        />
                        <div>

                            <h3 className="text-[32px] text-white">
                                Carol Huels
                            </h3>

                            <span className="text-yellow-400 text-[20px]">
                                ★★★★★
                            </span>

                        </div>

                    </div>

                    <p className="text-[20px] text-white/70 leading-[1.6] mt-8">
                        It's like bringing a little piece of nature indoors. Definitely worth the investment my plant collection has never looked better!
                    </p>

                    
        </div>
    </div>

        


        </section>
    )
}
export default CustomerReview