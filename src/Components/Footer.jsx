import logoIcon from "../assets/icons/logoicon.png"

function Footer() {
    return (
        <section className="mt-32 px-10 py-20 text-white">

            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">

                <div>

                    <div className="flex items-center gap-4">

                        <img
                            src={logoIcon}
                            className="w-[70px]"
                        />

                        <h1 className="text-[48px] font-bold">
                            FloraVision.
                        </h1>

                    </div>

                    <p className="text-[18px] text-white leading-[1.6] mt-8 max-w-[500px]">
                        "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
                    </p>

                </div>

                <div className="flex flex-col gap-6">

                    <h2 className="text-[28px] font-semibold">
                        Quick Link’s
                    </h2>

                    <div className="flex flex-col gap-4 text-[18px] text-white underline underline-offset-4">

                        <span>Home</span>
                        <span>Type’s Of plant’s</span>
                        <span>Contact</span>
                        <span>Privacy</span>

                    </div>

                </div>

                <div className="flex flex-col gap-6">

                    <h2 className="text-[28px] font-semibold">
                        For Every Update.
                    </h2>

                    <div className="flex items-center">

                        <input
                            type="text"
                            placeholder="Enter Email"
                            className="w-[320px] h-[60px] bg-transparent border  rounded-l-xl px-6 text-[18px] outline-white"
                        />

                        <button className="h-[60px] px-8 bg-white text-black font-semibold rounded-r-xl">
                            SUBSCRIBE
                        </button>

                    </div>

                </div>

            </div>

            <div className="flex items-center justify-between mt-20">

                <div className="flex items-center gap-10 text-[22px] font-semibold">

                    <span>FB</span>
                    <span>TW</span>
                    <span>LI</span>

                </div>

                <p className="text-[18px] text-white">
                    FloraVision © all right reserve
                </p>

            </div>

        </section>
    )
}

export default Footer