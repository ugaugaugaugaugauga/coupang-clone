import Image from 'next/image'

const QRInput = () => {
  return (
    <div className='w-full sm:w-[480px] mx-auto mt-7 flex flex-col'>
      <div className='relative w-full h-64'>
        <Image src={'/qr.png'} alt='qr' fill />
      </div>
      <hr className='mt-5 mb-4' />
      <button
        type='button'
        className='w-full py-[14px] border border-black dark:border-white rounded-sm'
      >
        <p className='font-bold'>회원가입</p>
      </button>

      <div className='flex justify-center text-xs font-thin mt-7 '>
        <div className='flex flex-col text-center gap-1'>
          <p>법인 고객이신가요?</p>
          <p>사업자 회원으로 전용 특가 혜택을 누려보세요.</p>
          <div role='button' className='text-base font-bold'>
            쿠팡비즈 간편가입&gt;
          </div>
          <p className='mt-9 font-extralight'>
            @Coupang Crop. All rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default QRInput
