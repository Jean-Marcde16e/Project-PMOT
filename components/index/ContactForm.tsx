import React from 'react';
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";

function ContactForm() {
    return (
        <section className="h-fit bg-neutral-900 grid md:grid-cols-2 lg:gap-12 lg:my-20 my-10 gap-8  px-4 py-8 lg:p-16 rounded-md">

            <div className="flex-col justify-start items-start gap-6 inline-flex my-auto px-4 lg:px-16">

                <div className="rounded-2xl justify-start items-center gap-4 inline-flex">
                    <Mail color="#BC201B" />
                    <p className="text-white text-xl font-medium font-roboto underline">info@pmot.nl</p>
                </div>

                <div className="rounded-2xl border -ml-4 md:-ml-6 border-secondary justify-start items-center gap-4 px-4 py-1 md:px-6 md:py-3 flex">
                    <Phone color="#BC201B" />
                    <p className="text-white text-xl font-medium font-roboto"> +31 (0)597 591596</p>
                </div>

                <div className="rounded-2xl justify-start items-center gap-4 inline-flex">
                    <MapPin color="#BC201B" />
                    <p className="text-white text-xl font-medium font-['Poppins']">Torenstraat 13 9679 BN Scheemda</p>
                </div>

            </div>

            <form className="px-8 lg:px-16 bg-white flex-col justify-center items-start rounded-md flex">

                <div className="w-full h-full py-12 lg:py-16 flex flex-col gap-4">
                    <h1 className="text-neutral-900 text-2xl sm:text-3xl md:text-5xl font-semibold font-['Roboto']">Neem contact op!</h1>

                    <div className=" flex-col justify-start items-start flex gap-6">
                        <input type="text" placeholder="Naam" className="h-11 px-2 w-full bg-white rounded-lg border border-neutral-900" />

                        <input type="email" placeholder="Email" className="px-2 flex-grow-1 h-11 w-full bg-white rounded-lg border border-neutral-900" />

                        <textarea placeholder="Uw bericht" className=" px-2 h-36 w-full bg-white rounded-lg border border-neutral-900"></textarea>
                    </div>

                    <div className="w-36 h-12 px-4 py-3 bg-red-700 rounded text-center">
                        <button type="submit" className="text-white text-sm font-medium font-roboto">Verstuur bericht!</button>
                    </div>
                </div>
            </form>

        </section>
    )
}

export default ContactForm
