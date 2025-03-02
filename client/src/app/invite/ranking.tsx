import Image from 'next/image'

import cooper from '../../assets/Medal_cooper.svg'
import gold from '../../assets/Medal_gold.svg'
import silver from '../../assets/Medal_silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none ">
            <span className="font-semibold">1°</span> | Juan Darlei
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-300 leading-none">
            1030
          </span>

          <Image src={gold} alt="" className="absolute top-0 right-8" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none ">
            <span className="font-semibold">2°</span> | Juan Darlei
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-300 leading-none">
            1030
          </span>

          <Image src={silver} alt="" className="absolute top-0 right-8" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none ">
            <span className="font-semibold">3°</span> | Juan Darlei
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-300 leading-none">
            1030
          </span>

          <Image src={cooper} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  )
}
