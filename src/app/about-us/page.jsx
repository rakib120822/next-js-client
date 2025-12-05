import Image from "next/image";
import React from "react";

function AboutPage() {
  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2">
          <Image
            height={400}
            width={400}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOUAaFZ3npmwP0OEzr6Vx-8ub2sSvjKrLDOA&s" // replace with your image path
            alt="Delicious food"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
            About{" "}
            <span className=" text-red-600">
              F<span className="text-white">OO</span>DY
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            At Foody, we are passionate about delivering the best culinary
            experience right to your doorstep. From local delights to
            international flavors, we bring a world of taste to your table.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our mission is to make food ordering simple, fast, and enjoyable
            while supporting local restaurants and chefs. Freshness,
            convenience, and happiness are always on the menu.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex-1 text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Fast Delivery
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Get your favorite meals in no time.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex-1 text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Fresh Ingredients
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Quality food sourced locally and responsibly.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex-1 text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Easy Ordering
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Simple and intuitive online ordering experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
