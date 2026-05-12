import plant1 from "../assets/plants/plant1.png"
import plant2 from "../assets/plants/plant2.png"
import plant4 from "../assets/plants/plant4.png"
import plant5 from "../assets/plants/plant5.png"
import plant6 from "../assets/plants/plant6.png"
import plant7 from "../assets/plants/plant7.png"
import bagIcon from "../assets/icons/bag.png"

function TopSelling() {
    return(
        <section className="mt-32 px-10 text-white">
            <h1 className="text-[30px] font-bold text-center text-white">
                Our Top Selling Plants</h1>

                <div className="relative z-10 mt-35 flex flex-wrap justify-center gap-10">
                    <div className="relative w-full max-w-[420px] h-[530px] bg-[#1F2A1C]/80 rounded-[40px] p-8 flex flex-col backdrop-blur-md border border-white/10">

                        <img src={plant1} 
                        className="w-[500px] object-contain  -mt-30"
                        />
                        <span className="text-[30px] text-white/60  ml-10">
                            Aglaonema Plant
                        </span>

                         <p className="text-[18px] text-white/70 mt-4 leading-[1.5]">
                           The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care
                        </p>

                       <div className="flex items-center justify-between mt-6">

                            <h4 className="text-[30px] text-white">
                                Rs. 300/-
                            </h4>

                            <button className="w-[52px] h-[52px] border border-white rounded-xl text-white flex items-center justify-center">
                                <img
                                    className="w-[22px] h-[24px] object-contain"
                                    src={bagIcon}
                                />
                            </button>

                        </div>

                    </div>

                        <div className="relative w-full max-w-[420px] h-[530px] bg-[#1F2A1C]/80 rounded-[40px] p-8 flex flex-col backdrop-blur-md border border-white/10">

                        <img src={plant2} 
                        className="w-[500px] object-contain  -mt-30"
                        />
                        <span className="text-[30px] text-white/60  ml-10">
                            Plantain Lilies
                        </span>

                         <p className="text-[18px] text-white/70 mt-4 leading-[1.5]">
                           Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,
                        </p>

                       <div className="flex items-center justify-between mt-6">

                            <h4 className="text-[30px] text-white">
                                Rs. 380/-
                            </h4>

                            <button className="w-[52px] h-[52px] border border-white rounded-xl text-white flex items-center justify-center">
                                <img
                                    className="w-[22px] h-[24px] object-contain"
                                    src={bagIcon}
                                />
                            </button>

                        </div>
                    </div>

                    <div className="relative w-full max-w-[420px] h-[530px] bg-[#1F2A1C]/80 rounded-[40px] p-8 flex flex-col backdrop-blur-md border border-white/10">

                        <img src={plant4} 
                        className="w-[500px] object-contain  -mt-30"
                        />
                        <span className="text-[30px] text-white/60  ml-10">
                            Cactus
                        </span>

                         <p className="text-[18px] text-white/70 mt-4 leading-[1.5] min-h-[80px]">
                           It is known for their ability to thrive in arid environments
                        </p>

                       <div className="flex items-center justify-between mt-6">

                            <h4 className="text-[30px] text-white">
                                Rs. 259/-
                            </h4>

                            <button className="w-[52px] h-[52px] border border-white rounded-xl text-white flex items-center justify-center">
                                <img
                                    className="w-[22px] h-[24px] object-contain"
                                    src={bagIcon}
                                />
                            </button>

                        </div>
                    </div>

                    <div className="relative w-full max-w-[420px] h-[530px] bg-[#1F2A1C]/80 rounded-[40px] p-8 flex flex-col backdrop-blur-md border border-white/10 mt-20">

                        <img src={plant5} 
                        className="w-[500px] object-contain  -mt-30"
                        />
                        <span className="text-[30px] text-white/60  ml-10">
                            Swiss cheese Plant
                        </span>

                         <p className="text-[18px] text-white/70 mt-4 leading-[1.5] min-h-[80px]">
                           It is a popular tropical houseplant known for its distinctive, perforated leaves
                        </p>

                       <div className="flex items-center justify-between mt-6">

                            <h4 className="text-[30px] text-white">
                                Rs. 400/-
                            </h4>

                            <button className="w-[52px] h-[52px] border border-white rounded-xl text-white flex items-center justify-center">
                                <img
                                    className="w-[22px] h-[24px] object-contain"
                                    src={bagIcon}
                                />
                            </button>

                        </div>

                    </div>

                        <div className="relative w-full max-w-[420px] h-[530px] bg-[#1F2A1C]/80 rounded-[40px] p-8 flex flex-col backdrop-blur-md border border-white/10 mt-20">

                        <img src={plant6} 
                        className="w-[500px] object-contain  -mt-30"
                        />
                        <span className="text-[30px] text-white/60  ml-10">
                            Sansevieria plant
                        </span>

                         <p className="text-[18px] text-white/70 mt-4 leading-[1.5] ">
                           It is a popular indoor plant admired for its striking appearance and low-maintenance nature.
                        </p>

                       <div className="flex items-center justify-between mt-6">

                            <h4 className="text-[30px] text-white">
                                Rs. 450/-
                            </h4>

                            <button className="w-[52px] h-[52px] border border-white rounded-xl text-white flex items-center justify-center">
                                <img
                                    className="w-[22px] h-[24px] object-contain"
                                    src={bagIcon}
                                />
                            </button>

                        </div>
                    </div>

                    <div className="relative w-full max-w-[420px] h-[530px] bg-[#1F2A1C]/80 rounded-[40px] p-8 flex flex-col backdrop-blur-md border border-white/10 mt-20">

                        <img src={plant7} 
                        className="w-[500px] object-contain  -mt-30"
                        />
                        <span className="text-[30px] text-white/60  ml-10">
                            Agave plant
                        </span>

                         <p className="text-[18px] text-white/70 mt-4 leading-[1.5] min-h-[40px]">
                           The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.
                        </p>

                       <div className="flex items-center justify-between mt-6">

                            <h4 className="text-[30px] text-white">
                                Rs. 359/-
                            </h4>

                            <button className="w-[52px] h-[52px] border border-white rounded-xl text-white flex items-center justify-center">
                                <img
                                    className="w-[22px] h-[24px] object-contain"
                                    src={bagIcon}
                                />
                            </button>

                        </div>
                    </div>

                </div>    

        </section>
    )
}
export default TopSelling