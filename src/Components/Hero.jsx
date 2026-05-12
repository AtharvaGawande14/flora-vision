import heroBg from "../assets/plants/hero-bg.png"
import plant1 from "../assets/plants/plant1.png"
import plant2 from "../assets/plants/plant2.png"
import plant3 from "../assets/plants/plant3.png"
import avt1 from "../assets/avatar/avt1.png"
import bagIcon from "../assets/icons/bag.png"

function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden text-white -mt-[100px] pt-[150px]">

            <img
                src={heroBg}
               className="absolute inset-0 w-full h-full object-cover object-[center_8%]"
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between px-10 pt-14">

                <div className="max-w-[800px]">

                    <h1 className="text-[42px] md:text-[60px] lg:text-[88px] font-bold leading-[1.05] tracking-tight text-white/90">
                        Earth’s Exhale
                    </h1>

                    <p className="mt-6 max-w-[650px] text-[20px] leading-[1.5] text-white/80">
                        "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
                    </p>

                    <div className="mt-10 flex items-center gap-6">

                        <button className="px-10 py-4 border border-white rounded-xl text-[20px] text-white">
                            Buy Now
                        </button>

                        <div className="flex items-center gap-4">

                            <button className="w-[58px] h-[58px] rounded-full border border-white flex items-center justify-center">
                                ▶
                            </button>

                            <span className="text-[18px] text-white">
                                Live Demo...
                            </span>

                        </div>

                    </div>

                </div>

                <div className="relative z-10">
                    <div className="relative w-full max-w-[420px] h-[530px] bg-[#1F2A1C]/80 rounded-[40px] p-8 flex flex-col backdrop-blur-md border border-white/10">
                    
                            <img src={plant1} 
                            className="w-[500px] object-contain  -mt-30"
                            />
                          <span className="text-[20px] text-white/60  ml-10 ">
                            Indoor Plant
                        </span>
                         <span className="text-[30px] text-white/60  ml-10">
                            Aglaonema Plant&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ❯
                        </span>
                        <button className="px-8 py-3 border border-white rounded-xl text-[18px] mt-4 text-white w-fit ml-10">
                            Buy Now
                        </button>
                        <div className="flex justify-center items-center gap-3 mt-8">
                            <span className="w-[22px] h-[6px] bg-white rounded-full"></span>
                            <span className="w-[6px] h-[6px] bg-white/60 rounded-full"></span>
                            <span className="w-[6px] h-[6px] bg-white/60 rounded-full"></span>
                        </div>
                    </div>
                </div>

            </div>
            <div>

    <div className="relative z-10 ml-10 -mt-35">

    <div className="relative w-[320px] h-[220px] bg-[#1F2A1C]/80 rounded-[40px] p-8 flex flex-col backdrop-blur-md border border-white/10">

        <div className="flex items-center gap-4">

            <img
                src={avt1}
                className="w-[55px] h-[55px] rounded-full object-cover"
            />

            <div>

                <h3 className="text-[20px] text-white">
                    Ronnie Hamill
                </h3>

                <span className="text-yellow-400 text-[14px]">
                    ★★★★★
                </span>

            </div>

        </div>

        <p className="text-[14px] text-white/70 leading-[1.5] mt-6">
            I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
        </p>

    </div>

</div>


<div className="relative z-10 mt-32 px-10">

    <h2 className="text-[30px] font-bold text-center text-white">
        Our Trendy Plants
    </h2>

    <div className="flex flex-col gap-35 mt-20">

        <div className="w-full h-[460px] bg-[#1F2A1C]/80 rounded-[70px] backdrop-blur-md border border-white/10 flex flex-col lg:flex-row items-center justify-between px-12">

            <img className="w-[580px] h-[580px] -mt-16 -ml-12 object-contain" src={plant2} />

            <div className="max-w-[600px]">

                <h3 className="text-[30px] font-semibold text-white">
                    For Your Desks Decorations
                </h3>

                <p className="text-[18px] text-white/70 mt-4 leading-[1.5]">
                    I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
                </p>

                <h4 className="text-[30px] font-bold text-white mt-6">
                    Rs. 599/-
                </h4>

                <div className="flex items-center gap-5 mt-6">

                    <button className="px-8 py-3 border border-white rounded-xl text-[18px] text-white">
                        Explore
                    </button>

                   <button className="w-[52px] h-[52px] border border-white rounded-xl text-white flex items-center justify-center">
                        <img className="w-[22px] h-[24px] object-contain" src={bagIcon}/>
                    </button>

                </div>

            </div>

        </div>

        <div className="w-full h-[460px] bg-[#1F2A1C]/80 rounded-[70px] backdrop-blur-md border border-white/10 flex flex-col lg:flex-row items-center justify-between px-12  ">

    <div className="max-w-[600px] ml-10">

        <h3 className="text-[30px] font-semibold text-white">
            For Your Desks Decorations
        </h3>

        <p className="text-[18px] text-white/70 mt-4 leading-[1.5]">
            The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
        </p>

        <h4 className="text-[30px] font-bold text-white mt-6">
            Rs. 399/-
        </h4>

        <div className="flex items-center gap-5 mt-6">

            <button className="px-8 py-3 border border-white rounded-xl text-[18px] text-white">
                Explore
            </button>

            <button className="w-[52px] h-[52px] border border-white rounded-xl text-white flex items-center justify-center">
                <img
                    className="w-[22px] h-[24px] object-contain"
                    src={bagIcon}
                />
            </button>

        </div>

    </div>

    <img
        className="w-[580px] h-[580px] -mt-10 object-contain"
        src={plant3}
    />

</div>

    </div>

    
</div>

            </div>

        </section>
    )
}

export default Hero