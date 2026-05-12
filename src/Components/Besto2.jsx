import plant1 from "../assets/plants/plant1.png"

function Besto2() {
    return (
        <section className="mt-32 px-10 text-white">

            <h1 className="text-[30px] font-bold text-center">
                Our Best o2
            </h1>

            <div className="flex flex-col gap-35 mt-20">

                <div className="w-full h-[520px] bg-[#1F2A1C]/80 rounded-[70px] backdrop-blur-md border border-white/10 flex flex-col lg:flex-row items-center justify-between px-12">

                    <img
                        className="w-[620px] h-[620px] -mt-16 -ml-12 object-contain"
                        src={plant1}
                    />

                    <div className="max-w-[600px] flex flex-col gap-8">

                        <h1 className="text-[34px] font-bold">
                            We Have Small And Best O2 Plants Collection’s
                        </h1>

                        <p className="text-[18px] text-white/80 leading-[1.6]">
                            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
                        </p>

                        <p className="text-[18px] text-white/80 leading-[1.6]">
                            Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
                        </p>

                        <div className="w-full flex items-center justify-between mt-8">

                            <button className="px-8 py-3 w-fit border border-white rounded-xl text-[18px] text-white">
                                Explore
                            </button>

                            <div className="flex items-center gap-6">

                                <span className="text-[28px] text-white/60">
                                    ❮
                                </span>

                                <span className="text-[18px] text-white/80">
                                    01/04
                                </span>

                                <span className="text-[28px] text-white">
                                    ❯
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Besto2