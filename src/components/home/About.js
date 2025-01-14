import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ContentHTML from "../global/ContentHTML";
import { GROUPS_TYPES, GROUP_AVAILABLES } from "../../constants";
import { Transition } from "@headlessui/react";

//markup
const About = ({ data, groups }) => {
  const [groupAll, setGroupAll] = useState([]);

  const groupsBy = (data) => {
    return data.reduce((acc, curr) => {
      curr.node.frontmatter.groupTypes?.map((type) => {
        if (!acc[type]) acc[type] = []; //If this type wasn't previously stored
        acc[type].push(curr);
      });
      return acc;
    }, {});
  };

  useEffect(() => {
    setGroupAll(groupsBy(groups));
  }, [groups]);

  return (
    <div className="relative mt-20">
      <Transition appear={true} show={true}>
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <Transition.Child
            enter="transition ease-linear duration-800 transform"
            enterFrom="-translate-y-8"
            enterTo="translate-y-0"
            leave="transition ease-linear duration-300 transform"
            leaveFrom="-translate-y-0"
            leaveTo="translate-y-8"
          >
            <div className="relative sm:py-16 lg:py-0">
              <div
                aria-hidden="true"
                className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
              >
                <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
                <svg
                  className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                {/* Testimonial card*/}
                <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                  {/* <img sizes={getImageSrc} className="absolute inset-0 h-full w-full object-cover" /> */}
                  <GatsbyImage
                    className="inset-0 h-full w-full object-cover RT--absulute"
                    image={data.image.childImageSharp.gatsbyImageData}
                    alt={data.author}
                  />
                  <div
                    className="absolute inset-0 bg-rtSecondary"
                    style={{ mixBlendMode: "multiply" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rtSecondary via-rtSecondary opacity-80" />
                  <div className="relative px-8">
                    <div>
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                        alt="Workcation"
                      />
                    </div>
                    <blockquote className="mt-8">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg
                          className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-rose-400"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative">{data.phrase}</p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-rose-200">
                          {data.author}
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
          <Transition.Child
            enter="transition ease-linear duration-800 transform"
            enterFrom="translate-y-8"
            enterTo="translate-y-0"
            leave="transition ease-linear duration-300 transform"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-8"
          >
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              {/* Content area */}
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <ContentHTML content={data.description} />
              </div>

              {/* Stats section */}
              <div className="mt-10">
                <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                  {GROUP_AVAILABLES.map(
                    (group, i) =>
                      groupAll[group.name] && (
                        <div
                          key={i}
                          className="border-t-2 border-gray-100 pt-6"
                        >
                          <dt className="text-base font-medium text-gray-500">
                            {GROUPS_TYPES[group.name].plural}
                          </dt>
                          <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                            {groupAll[group.name].length}
                          </dd>
                        </div>
                      )
                  )}
                </dl>
                <div className="mt-10">
                  <Link
                    to="/grupos"
                    className="text-base font-medium text-rtSecondary"
                  >
                    Conoce todas las agrupaciones aquí &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </div>
  );
};

export default About;
