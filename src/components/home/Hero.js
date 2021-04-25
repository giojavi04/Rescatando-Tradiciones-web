import * as React from "react"
import { ChevronRightIcon } from '@heroicons/react/solid'

import homeHeroImg from '../../images/home-hero.png';

// markup
const Hero = () => {
  return (
    <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <a
                href="#"
                className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-rtSecondary rounded-full">
                  Te gusta la cultura
                      </span>
                <span className="ml-4 text-sm">Conócenos.</span>
                <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
              </a>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Somos la escencia</span>
                <span className="bg-clip-text text-rtSecondary block">
                  de la tradición.
                      </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Somos una agrupación creada para el rescate de nuestras raíces, de nuestra cultura, vela por mantener la tradición de las Bandas de Guerra y grupos de Bastones quienes se desarrollaron con disciplina, respeto y amor a la patria.
                    </p>
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">
                        Email
                            </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Ingresa tu email"
                        className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full py-3 px-4 rounded-md shadow bg-black text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                      >
                        Solicita información
                            </button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    ¿Deseas conocer más acerca de nuestro colectivo?. Ingresa tu email, y nos comunicaremos contigo{' '}
                    <a href="#" className="font-medium text-white">
                      terminos de privacidad
                          </a>
                          .
                        </p>
                </form>
              </div>
            </div>
          </div>
          <div className="m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <img
                className="w-full"
                src={homeHeroImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero