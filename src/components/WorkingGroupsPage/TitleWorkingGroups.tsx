import React from "react";

const WorkingGroups16: React.FC = () => {

  return (

    <section className="bg-white py-16 md:py-24">

      <div className="mx-auto max-w-7xl px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* LEFT */}

          <div className="lg:sticky lg:top-10">

            <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">

              About Us

            </p>



            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">

              What is the G-PSF?

            </h1>



            <div className="mt-5 h-1.5 bg-orange-500 w-56 sm:w-72 md:w-96 lg:w-[440px] translate-x-0 sm:translate-x-8 md:translate-x-25" />



            <p className="mt-8 max-w-md text-lg sm:text-xl leading-relaxed font-bold text-[#1e3a8a] translate-x-0 sm:translate-x-8 md:translate-x-25">

              The G-PSF is a structured dialogue platform chaired by the Prime

              Minister of Cambodia, bringing together senior government officials

              and private sector leaders to address policy and regulatory

              constraints affecting economic growth.

            </p>
          </div>

        </div>

      </div>

    </section>

  );

};



export default WorkingGroups16;